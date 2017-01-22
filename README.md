# Littlebits Invention

This project is developed with rails 5, so Ruby 2.2.2+ is required.

To run it locally:
- Clone the git repo of master branch<br>
`git clone https://github.com/maizehua/littilebits_invention.git`
- If bundler is already installed, go to next step. Otherwise, you can install bundler with `gem install bundler`
- `cd littilebits_invention` and run `bundle install` 
- initialize database with `bundle exec rake db:setup`
- Install imagemagick so it can resize the uploaded image. On mac, you can run:
`brew install imagemagick`
- start the server with `bundle exec rails s`, and now you should be able to see the app running on `localhost:3000`

It is deployed to:

https://littilebits-invention.herokuapp.com/

I've generated some data for it.

Note that since I'm using a free heroku plan, the web app will sleep if it receives no traffic in a 30 minute period.
Please expect a longer page load time for the first visit.
