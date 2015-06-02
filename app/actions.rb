# Homepage (Root path)
get '/' do
  puts "hi"
  # require_relative 'table_manager'
  # TableManager.open_table
  john_attributes = {firstname: 'John', lastname: 'Smith', email: 'johnsmith@gmail.com'}
  john = Contact.new(john_attributes)
  john.save
  tyler_attributes = {firstname: 'Tyler', lastname: 'Smith', email: 'tylersmith@gmail.com'}
  tyler = Contact.new(tyler_attributes)
  tyler.save
  john_attributes = {firstname: 'John', lastname: 'Smith', email: 'johnsmith@gmail.com'}
  john = Contact.new(john_attributes)
  john.save
  tyler_attributes = {firstname: 'Tyler', lastname: 'Smith', email: 'tylersmith@gmail.com'}
  tyler = Contact.new(tyler_attributes)
  tyler.save
  john_attributes = {firstname: 'John', lastname: 'Smith', email: 'johnsmith@gmail.com'}
  john = Contact.new(john_attributes)
  john.save
  tyler_attributes = {firstname: 'Tyler', lastname: 'Smith', email: 'tylersmith@gmail.com'}
  tyler = Contact.new(tyler_attributes)
#puts tyler.inspect
tyler.save

tyler_attributes = {firstname: 'Tyler', lastname: 'Rex', email: 'tylersmith@gmail.com'}
tyler = Contact.new(tyler_attributes)
puts tyler.inspect
tyler.save

puts "meta test"
# Contact.metaprogram
puts "find by last name"
puts Contact.find_all_by_lastname('Smith').class

# phone_attributes = {number_of_phone: '4324324324', contact_id: '1'}
# someone_number = Phone.new(phone_attributes)
# someone_number.save


def generate_phone_number
  rand.to_s[2..11] 

end

def generate_random_name

  random_name =  (0...10).map { ('a'..'z').to_a[rand(26)] }.join

end


for i in 0..10

  tyler_attributes = {firstname: generate_random_name, lastname: generate_random_name, email: 'tylersmith@gmail.com'}
  tyler = Contact.new(tyler_attributes)
  puts tyler.inspect
  tyler.save

end

# for i in 0..Contact.count-1

#   phone_attributes = {number_of_phone: generate_phone_number , contact_id: rand(Contact.count)}
#   someone_number = Phone.new(phone_attributes)
#   someone_number.save


# end


erb :index
end




