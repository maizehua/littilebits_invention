class CreateBits < ActiveRecord::Migration[5.0]
  def change
    create_table :bits do |t|
      t.string :name

      t.timestamps
    end
  end
end
