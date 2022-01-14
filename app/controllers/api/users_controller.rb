class Api::UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(create_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def destroy 
        user = find_user
        user.destroy 
        head :no_content
    end
    
    def update 
        user = find_user 
        user.update!(user_params)
        render json: user 
    end
    
private 
    
        def create_params 
            params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
        end
    
        def find_user 
            User.find(params[:id])
        end
    
end
    
