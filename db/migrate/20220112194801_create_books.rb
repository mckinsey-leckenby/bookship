class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :img_url
      t.string :title
      t.string :author
      t.string :description
      t.string :pages
      t.string :genre

      t.timestamps
    end
  end
end
