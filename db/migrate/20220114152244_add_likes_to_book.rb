class AddLikesToBook < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :likes, :integer, null: false, default: 0
  end
end
