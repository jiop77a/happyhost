class AddViewsToImages < ActiveRecord::Migration[5.1]
  def change
    add_column :images, :views, :integer, default: 0
  end
end
