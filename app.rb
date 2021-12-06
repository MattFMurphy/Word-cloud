require 'sinatra'
require 'json'

# root path - renders static html file
get '/' do
  send_file 'public/index.html'
end
