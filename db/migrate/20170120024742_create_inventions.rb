class CreateInventions < ActiveRecord::Migration[5.0]
  def change
    create_table :inventions do |t|
      t.column :title, 'VARCHAR(255)'
      t.text :description
      t.column :username, 'VARCHAR(255)'
      t.column :email, 'VARCHAR(255)'

      t.timestamps
    end
  end
end
