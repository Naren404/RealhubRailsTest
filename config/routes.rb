Rails.application.routes.draw do

  # get '/orders', to: 'orders#index'
  # post '/update_status/:id', to: 'orders#update_status'
  root 'orders#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
