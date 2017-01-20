require "rails_helper"

RSpec.describe Invention, :type => :model do
  describe 'validations' do
    it "must have a title" do
      invention = Invention.create({
        description: 'test'
      })
      expect(invention.errors.full_messages).to include("Title can't be blank")
    end

    it "must have a description" do
      invention = Invention.create({
        title: 'test'
      })
      expect(invention.errors.full_messages).to include("Description can't be blank")
    end
  end
end