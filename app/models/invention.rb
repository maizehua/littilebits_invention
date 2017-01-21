class Invention < ApplicationRecord
  validates :title, :description, presence: true

  acts_as_taggable_on :materials
end
