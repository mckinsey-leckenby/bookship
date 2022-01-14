class User < ApplicationRecord

    has_many :comments
    has_many :books

    has_secure_password 

    validates :email, presence: true, uniqueness: true 
    validates :first_name, presence: true 
    validates :last_name, presence: true 
end
