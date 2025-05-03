# Benchie CDN Helper

Benchie is a small helper script that dynamically selects the fastest CDN at runtime, based on response time. It fetches and caches resources like CSS or JS, and injects them into the DOM using blob URLs. This improves performance and flexibility without requiring HTML changes for different CDNs.

---

## Setup

To enable Benchie, include the following script in your `<head>`:

```html
<script>
// Define a list of CDN base URLs to test.
// The script will use the fastest one.
const $__CDN_LIST = [
  window.location.origin, // fallback to current origin
  // Add additional CDN origins below
  // e.g. 'https://cdn.example.com', 'https://static.mycdn.net'
];

// Paste the contents of benchie.min.js here
</script>
```

---

## Usage

To declare resources that should be rewritten to blob URLs and loaded via the best available CDN, use the following HTML attributes:

### 1. **Declarative `<meta>` tag**

You can inject a `<link>` element by declaring a special `<meta>` tag with the `name="pathscale-cdn"` and a JSON string as its `content`:

```html
<meta name="pathscale-cdn" content='{"tag":"link","rel":"stylesheet","href":"/app.css?v=1.0.0"}'>
```

This will be replaced at runtime with:

```html
<link rel="stylesheet" href="blob:<resolved-url>">
```

**Important:**

* The `content` value must be a **valid JSON string**.
* Currently only `tag: link` is supported.

### 2. **Using `data-src` and `data-href`**

For existing tags, you can use:

```html
<img data-src="/image.png">
<script data-src="/script.js"></script>
```

These will be automatically rewritten into:

```html
<img src="blob:<url>">
<script src="blob:<url>"></script>
```

---

## Global Helpers

When Benchie loads, it exposes the following global values:

### `window.t`

A globally available async function for resolving blob URLs manually:

```js
const blobUrl = await window.t('/some-resource.js', window.$__CDN);
```

### `window.$__CDN`

The base CDN URL that was selected at runtime (e.g. `https://cdn.example.com`).
This is determined by racing all URLs from the `$__CDN_LIST`.

---

## Build Instructions

To build the minified version of Benchie:

1. Navigate to the `cdn` directory:

```bash
cd cdn
```

2. Run the build script (requires [Bun](https://bun.sh)):

```bash
bun run build-benchie.ts
```

This will generate `cdn/benchie.min.js` from the source file `cdn/benchie.js`, using Bun’s built-in minifier.

---

## License

This code is proprietary and confidential:

```
PathScale CONFIDENTIAL
© 2025 PathScale PTE Ltd. All rights reserved.
Do not distribute without prior written permission.
```
