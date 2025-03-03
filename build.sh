#!/bin/bash

# Build Ruby Gem
cd ruby-gem
echo "Building Ruby Gem..."
gem build sutra_matrix.gemspec
gem install ./sutra_matrix-0.1.0.gem

# Build Node.js Package
cd ../node-package
echo "Building Node Package..."
npm install
npm run build

echo "Build complete!"
