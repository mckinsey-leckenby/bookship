class Book < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users
   
end
