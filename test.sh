#!/bin/bash

# Test Ruby Gem
cd ruby-gem
echo "Running Ruby Gem Tests..."
ruby -Ilib test/calculate_test.rb

# Test Node.js Package
cd ../node-package
echo "Running Node Package Tests..."
npm run test

echo "Tests complete!"
