Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home_page#index'
  post '/', to: 'home_page#client_message'
  get '/project1', to: 'projects#project1'
  get '/project2', to: 'projects#project2'
  get '/project3', to: 'projects#project3'
  get '/project4', to: 'projects#project4'
  get '/project5', to: 'projects#project5'
  get '/project6', to: 'projects#project6'
  get '/project7', to: 'projects#project7'
  get '/project8', to: 'projects#project8'
  get '/project9', to: 'projects#project9'
  get '/project10', to: 'projects#project10'
  get '/project11', to: 'projects#project11'
  get '/project12', to: 'projects#project12'
  get '/project13', to: 'projects#project13'
  get '/load_more', to: 'projects#load_more'
end
