#!/bin/bash
git reset --hard HEAD
rm -rf .svelte-kit node_modules frontend/node_modules
npm install --prefix frontend --force --legacy-peer-deps
npm run --prefix frontend build 