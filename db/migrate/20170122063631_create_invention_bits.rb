class CreateInventionBits < ActiveRecord::Migration[5.0]
  def change
    create_table :invention_bits do |t|

      t.timestamps
    end
  end
end
