class AddUrlIpToImages < ActiveRecord::Migration[5.1]
  def change
    add_column :images, :url, :string, null: false
    add_column :images, :ip, :inet, null: false
    add_index :images, :ip
  end
end
