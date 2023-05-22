Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index'
      get 'posts/:slug', to: 'posts#show'
      post 'posts/create'
      delete 'posts/:id', to: 'posts#destroy'
    end
  end

  root 'pages#index'
  get '*path', to: 'pages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
