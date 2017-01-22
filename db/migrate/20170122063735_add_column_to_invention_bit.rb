class AddColumnToInventionBit < ActiveRecord::Migration[5.0]
  def change
    add_column :invention_bits, :invention_id, :integer
    add_column :invention_bits, :bit_id, :integer
    add_index :invention_bits, [:invention_id, :bit_id], :unique => true
  end
end
