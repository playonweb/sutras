# ruby -Ilib test/calculate_test.rb
# frozen_string_literal: true

require "minitest/autorun"
require "json"
require_relative "../lib/sutra_matrix/calculate"

class TestSutraMatrix < Minitest::Test
  def setup
    @test_cases = JSON.parse(File.read("../tests/score-test.json"))
  end

  def test_score
    @test_cases.each do |tc|
      assert_equal tc["expected"], SutraMatrix::Calculate.score(*tc["input"])
    end
  end

  def test_invalid_input
    assert_raises(SutraMatrix::InvalidInputError) { SutraMatrix::Calculate.score(0, 0, 0, 2) }
  end
end
