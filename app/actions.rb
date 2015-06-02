
get '/contacts/' do
  Contact.all.to_json
end

get '/contacts' do
  Contact.all.to_json
end

get '/contacts/:id' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.to_json
end

get '/contacts/firstname/:firstname' do
  contact = Contact.find_all_by_firstname(params[:firstname])
   return status 404 if contact.nil?
  contact.to_json
end

get '/contacts/lastname/:lastname' do
  contact = Contact.find_all_by_lastname(params[:lastname])
   return status 404 if contact.nil?
  contact.to_json
end

get '/contacts/email/:email' do
  contact = Contact.find_all_by_email(params[:email])
   return status 404 if contact.nil?
  contact.to_json
end

delete '/contacts/:id/' do
  contact = Contact.find(params[:id])
  return status 404 if contact.nil?
  contact.to_json
  contact.destroy
end




get '/gui/contacts/' do
  Contact.all.to_json
  erb :'contacts/index'
end