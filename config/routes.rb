Rails.application.routes.draw do
  namespace :api do 

  resources :comments, only: [:index, :show, :create, :destroy, :update]
  resources :books, only: [:index, :show, :create, :update, :destroy]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  end
end
