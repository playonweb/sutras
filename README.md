(Choos ruby version) export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

```sh
cd ruby-gem

gem build sutra_matrix.gemspec
gem install ./sutra_matrix-0.1.0.gem

ruby example.rb
ruby -Ilib test/calculate_test.rb
```

