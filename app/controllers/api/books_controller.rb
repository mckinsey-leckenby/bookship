class Api::BooksController < ApplicationController

        def index 
            books = Book.all 
            render json: books 
        end

        def show 
            book = find_params
            render json: book, include: :comments  
        end 
       
        def create 
            book = Book.create!(create_params)
            render json: book, status: :created 
        end
       
        def destroy     
            book = find_params
            book.destroy 
            head :no_content 
        end
        
        def update 
            book = Book.find_by(id: params[:id])
            book.update(create_params)
            render json: book 
        end
    
    
    private 
        
        def create_params 
            params.permit(:img_url, :title, :author, :description, :pages, :genre, :likes)
        end
        
        def find_params
            Book.find(params[:id])
        end
    

end
