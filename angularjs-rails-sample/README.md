rails new angularjs-rails-sample -d mysql

add 'therubyracer' into Gemfile

bundle install

rails g controller home index

rm public/index.html

root :to => 'home#index'

rails g resource entry name winner:boolean

rake db:create
rake db:migrate

add 'angularjs-rails' into Gemfile

bundle install

在application.js中增加
//= require angular
//= require angular-bootstrap
//= require angular-resource


https://github.com/hiravgandhi/angularjs-rails
https://github.com/railscasts/405-angularjs
https://github.com/ludicast/angular-rails
