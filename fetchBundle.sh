#!/bin/bash

cd src/vue3-ui/ && \
npm run build && \
cp ./dist/bundle.js src/vue3.dev/node_modules/@pathscale/vue3-ui/dist/
