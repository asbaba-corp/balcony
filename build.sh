#!/bin/bash

# Navigate to the /dist directory relative to the script
DIR="$(dirname "$0")/dist"

cd "$DIR" || exit 1

# Recursively find .html files in /dist and rename them
find . -type f -name "*.html" | while read -r file; do
    mv "$file" "${file%.html}"
done