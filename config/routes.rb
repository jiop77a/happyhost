Rails.application.routes.draw do
  root to: "static_pages#root"
  get 'image/*path', to: 'static_pages#root'
  # get 'silly', to: 'images#silly'

  namespace :api, defaults: {format: :json} do
    resources :images, only: [:index, :create, :destroy, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
