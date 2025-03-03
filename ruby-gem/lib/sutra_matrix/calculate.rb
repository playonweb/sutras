# frozen_string_literal: true

module SutraMatrix
    class InvalidInputError < StandardError; end

    class Calculate
        MATRIX = {
            # [U, I, E, P]
            [0, 0, 0, 0] => 0,
            [1, 0, 0, 0] => 1,
            [0, 1, 0, 0] => 2,
            [1, 1, 0, 0] => 3,
            [0, 0, 1, 0] => 4,
            [1, 0, 1, 0] => 5,
            [0, 1, 1, 0] => 6,
            [1, 1, 1, 0] => 7,
            [0, 0, 0, 1] => 8,
            [1, 0, 0, 1] => 9,
            [0, 1, 0, 1] => 10,
            [1, 1, 0, 1] => 11,
            [0, 0, 1, 1] => 12,
            [1, 0, 1, 1] => 13,
            [0, 1, 1, 1] => 14,
            [1, 1, 1, 1] => 15
          }.freeze

        def self.score(u, i, e, p)
        raise InvalidInputError, "U, I, E, P should be binary (0 or 1)" unless [u, i, e, p].all? { |x| [0, 1].include?(x) }

        MATRIX[[u, i, e, p]]
        end
    end
end
