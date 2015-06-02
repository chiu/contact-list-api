# Homepage (Root path)
# get '/' do

# erb :index
# end

get '/' do
  Contact.search_all('Rex').to_json
end


get '/contacts' do
  Contact.all.to_json
end


get '/contacts/:id' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.to_json
end

get '/contact/name/:firstname' do
  Contact.search_by_firstname(params[:firstname])
end





