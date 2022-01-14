class Api::CommentsController < ApplicationController
    def index 
        comments = Comment.all 
        render json: comments
    end

    def show 
        comment = find_params
        render json: comment 
    end

    def create 
        comment = Comment.create!(create_params)
        render json: comment, status: :created 
    end

    def destroy 
        comment = find_params 
        comment.destroy 
        head :no_content
    end
       
    def update 
        comment = Comment.find_by(id: params[:id])
        comment.update(create_params) 
        render json: comment
    end
   


    private 

    def find_params
        Comment.find(params[:id])
    end

    def create_params 
        params.permit(:comment, :user_id, :book_id)
    end      
    

end
