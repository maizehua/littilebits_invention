Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'inventions#index'

  resources :inventions, only: [:index, :show, :new, :create]

  resources :materials, only: [:index]

  resources :bits, only: [:index]

  get "materials/filter"

  get 'bits/filter'
end
