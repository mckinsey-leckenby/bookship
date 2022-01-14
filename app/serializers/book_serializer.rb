class BookSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :title, :author, :description, :pages, :genre, :likes

  has_many :comments
  # has_many :users, through: :comments
end
