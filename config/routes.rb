Rails.application.routes.draw do
  root to: "static_pages#root"

  get 'silly', to: "images#silly"
  post 'silly', to: "images#create"
  resources :images

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
