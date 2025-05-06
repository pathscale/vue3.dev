/* 

// Define before:

const $__CDN_LIST = [
  window.location.origin,
  // ...
  // ...
];

*/

/*!*
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
  console.log('URL construction params:', { url, base });
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
 * Make `fetchAndCache` globally available via `window.t`
 * Useful for debugging or using manually from external scripts
 */
window.t = fetchAndCache

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

/**
 * Helper to convert <meta name="pathscale-cdn"> into a real <link>
 */
async function resolveMetaCdnElement(metaEl, cdnBase) {
  // Ensure the element is the expected <meta name="pathscale-cdn">
  if (
    !(metaEl instanceof Element) ||
    metaEl.tagName !== "META" ||
    metaEl.getAttribute("name") !== "pathscale-cdn"
  ) {
    return;
  }

  const content = metaEl.getAttribute('content');
  if (!content) return;

  const params = {};
  content.split(',').forEach((part) => {
    const [key, value] = part.split('=').map((s) => s.trim());
    if (key && value) params[key] = value;
  });

  if (params.tag !== 'link') return;

  const rel = params.rel || 'stylesheet';
  const href = params.href;
  if (!href) return;

  const blobUrl = await fetchAndCache(href, cdnBase);
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', rel);
  linkEl.setAttribute('href', blobUrl);

  metaEl.replaceWith(linkEl);
}

window.addEventListener("DOMContentLoaded", async function () {
  const abortController = new AbortController();

  // Ping all CDNs in parallel — the first to respond wins
  const cdnRace = $__CDN_LIST.map(url =>
    (async function tryHead(u, signal) {
      try {
        await fetch(u, {
          signal,
          cache: "no-store",
          mode: "no-cors",
          method: "HEAD",
          body: null
        });
        return u;
      } catch (e) {
        return Promise.reject(e);
      }
    })(url, abortController.signal)
  );

  try {
    $__CDN = await Promise.race(cdnRace);
  } catch (e) {
    // If all CDNs fail, use the first one that passes our validation
    $__CDN = $__CDN_LIST[0];
  }
  
  abortController.abort();
  
  // Ensure we have a valid base URL
  if (!$__CDN) {
    $__CDN = window.location.origin;
  }
  
  window.$__CDN = $__CDN;

  // Now that we have a valid CDN URL, proceed with resource resolution
  const cdnMetaElements = Array.from(document.querySelectorAll('meta[name="pathscale-cdn"]'));
  const dataSrcElements = Array.from(document.querySelectorAll("[data-src]"));
  const dataHrefElements = Array.from(document.querySelectorAll("[data-href]"));

  // Process meta elements first
  await Promise.all(cdnMetaElements.map(el => resolveMetaCdnElement(el, $__CDN)));

  // Then process src and href elements
  await Promise.all([
    ...dataSrcElements.map(el => fetchAndCache(el.dataset.src, $__CDN).then(blobUrl => el.setAttribute("src", blobUrl))),
    ...dataHrefElements.map(el => fetchAndCache(el.dataset.href, $__CDN).then(blobUrl => el.setAttribute("href", blobUrl)))
  ]);

  // Watch for DOM changes
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
