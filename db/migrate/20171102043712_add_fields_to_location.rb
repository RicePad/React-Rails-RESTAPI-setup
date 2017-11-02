class AddFieldsToLocation < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :title, :string
    add_column :locations, :body, :string
  end
end
