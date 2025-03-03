# Sutra Matrix

It is to build and distribute common utilities between frontend and backend with common tests.
It's a common source of truth between ruby backend and javascript frontend.
So this monorepo contains a ruby gem and a node package.

## Steps to Run:

### Build the project:
To build both Ruby and Node packages, run the following command in the parent folder:

```sh
./build.sh
```

### Test the project:
To run the tests for both Ruby and Node packages, run the following command:

```sh
./test.sh
```

## Steps to use

**Note** For private repos: create github repository personal access token GITHUB_PAT with read only permissions to the `content` and `metadata`

### In ruby
```ruby
# Gemfile
gem 'sutra_matrix', git: 'https://github.com/playonweb/sutras', branch: 'main', glob: 'ruby-gem/*.gemspec'
```
```sh
# (Optional) For private repo
export GITHUB_USERNAME="your_username"
export GITHUB_PAT="your_personal_access_token"
bundle config set --global github.com "$GITHUB_USERNAME:$GITHUB_PAT"
```

```sh
bundle install
```

### In node
```json
// package.json
// use gitpkg when package is under subdir like here in node-package/
"type": "module",
"dependencies": {
    "sutra-matrix": "https://gitpkg.now.sh/PlayOnWeb/sutras/node-package?main"
}
```
```sh
npm install
```
example: [node-package/examples/usage.js](node-package/examples/usage.js)

For private node packages use separate repo because subdir package is not accessible by node.
You may also publish package.tar.gz

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
