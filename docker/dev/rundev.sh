#!/bin/bash

if [ ! -d "node_modules" ]; then
    yarn
fi

npm run dev