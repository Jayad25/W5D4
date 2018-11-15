Rails.application.routes.draw do
  # get 'users/new'
  # get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :bands do
    resources :albums, only:[:new]
  end
  resources :albums,only:[:create,:edit,:show,:patch,:destroy,:index]
  # , only:[:new,:create,:show]
  resource :session, only:[:new,:create,:destroy]
end
