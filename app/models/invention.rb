class Invention < ApplicationRecord
  validates :title, :description, presence: true
end
