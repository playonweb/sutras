# Sutra Matrix

It is to build and distribute common utilities between frontend and backend with common tests.
It's a common source of truth between ruby backend and javascript frontend.
So this monorepo contains a ruby gem and a node package.

**Note** set common version numbers too.

## Ruby gem
(Choos ruby version) export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

```sh
cd ruby-gem

gem build sutra_matrix.gemspec
gem install ./sutra_matrix-0.1.0.gem

ruby example.rb
ruby -Ilib test/calculate_test.rb

# gem uninstall ./sutra_matrix-0.1.0.gem
```

## Node package

```sh
cd node-package
npm install
npm run build
npm run test
```
