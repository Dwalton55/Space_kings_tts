Rails.application.routes.draw do
  root 'welcome#index'
  get "how_to" => 'welcome#how_to'

  devise_for :users
  resources :characters
  resources :games
  get 'users/Games'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
