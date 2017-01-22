class Bit < ApplicationRecord
  has_many :inventions, through: :invention_bits
end
