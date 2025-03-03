
# (Choos ruby version) export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
# gem build sutra_matrix.gemspec
# gem install ./sutra_matrix-0.1.0.gem

require 'sutra_matrix'
puts SutraMatrix::Calculate.score(1, 0, 1, 1)
