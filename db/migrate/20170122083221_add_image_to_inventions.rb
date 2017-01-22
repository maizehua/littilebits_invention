class AddImageToInventions < ActiveRecord::Migration[5.0]
  def change
    add_column :inventions, :image, :string
  end
end
