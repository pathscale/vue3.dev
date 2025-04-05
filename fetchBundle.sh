#!/bin/bash

cd ../vue3-ui/ && \
bun run build && \
cp ./dist/bundle.js ../vue3.dev/node_modules/@pathscale/vue3-ui/dist/
