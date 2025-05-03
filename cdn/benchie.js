/* 

// Define before:

const $__CDN_LIST = [
  window.location.origin,
  // ...
  // ...
];

*/

/**!
 * PathScale CONFIDENTIAL
 * __
 * [2025] PathScale PTE Ltd
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of PathScale PTE Ltd.
 * The intellectual and technical concepts contained herein are proprietary to PathScale PTE Ltd
 * and may be covered by Singapore and Foreign Patents, patents in process, and are protected
 * by trade secret or copyright law. Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission is obtained from PathScale PTE Ltd.
 */

let $__CDN;

/**
 * Fetches a resource by URL and caches it using the Cache API.
 * Returns a blob URL.
 */
async function fetchAndCache(url, base) {
  const absoluteUrl = new URL(url, base).href;

  if (!window.caches) return absoluteUrl;

  const cache = await window.caches.open("v1");
  let response = await cache.match(url);

  if (!response) {
    response = await fetch(absoluteUrl, { method: "GET", cache: "no-store" });
    await cache.put(url, response.clone());
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

/**
 * Replaces `data-href` and `data-src` with actual working `href`/`src`
 * using fetchAndCache.
 */
async function resolveElementResource(el, cdnBase) {
  if (el.dataset.href) {
    if (el.href) URL.revokeObjectURL(el.href);
    el.setAttribute("href", await fetchAndCache(el.dataset.href, cdnBase));
  }

  if (el.dataset.src) {
    if (el.src) URL.revokeObjectURL(el.src);
    el.setAttribute("src", await fetchAndCache(el.dataset.src, cdnBase));
  }
}

window.addEventListener("DOMContentLoaded", async function () {
  const abortController = new AbortController();

  // Ping all CDNs in parallel — the first to respond wins
  const cdnRace = $__CDN_LIST.map(url =>
    (async function tryHead(u, signal) {
      await fetch(u, {
        signal,
        cache: "no-store",
        mode: "no-cors",
        method: "HEAD",
        body: null
      });
      return u;
    })(url, abortController.signal)
  );

  $__CDN = await Promise.race(cdnRace);
  abortController.abort();

  // Find elements with data-src and data-href and update them
  const dataSrcElements = Array.from(document.querySelectorAll("[data-src]"));
  const dataHrefElements = Array.from(document.querySelectorAll("[data-href]"));

  const srcRewrites = dataSrcElements.map(el =>
    fetchAndCache(el.dataset.src, $__CDN).then(blobUrl => el.setAttribute("src", blobUrl))
  );

  const hrefRewrites = dataHrefElements.map(el =>
    fetchAndCache(el.dataset.href, $__CDN).then(blobUrl => el.setAttribute("href", blobUrl))
  );

  await Promise.all(srcRewrites);
  await Promise.all(hrefRewrites);

  // Watch for DOM changes and apply blob URLs if needed
  new MutationObserver(async (mutations) => {
    for await (const mutation of mutations) {
      if (mutation.type === "attributes") {
        await resolveElementResource(mutation.target, $__CDN);
      } else if (mutation.type === "childList") {
        for await (const node of mutation.addedNodes) {
          if ("dataset" in node) {
            await resolveElementResource(node, $__CDN);
          }
        }
      }
    }
  }).observe(document, {
    attributes: true,
    attributeFilter: ["data-src", "data-href"],
    childList: true,
    subtree: true
  });
});
