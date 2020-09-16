#!/bin/bash

cd ../vue3-ui/ && \
npm run build && \
cp ./dist/bundle.js ../mach4motors.com/node_modules/@pathscale/vue3-ui/dist/
