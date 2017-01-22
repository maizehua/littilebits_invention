require 'carrierwave/orm/activerecord'

class Invention < ApplicationRecord
  validates :title, :description, presence: true

  acts_as_taggable_on :materials

  has_many :invention_bits
  has_many :bits, through: :invention_bits

  mount_uploader :image, ImageUploader
end
