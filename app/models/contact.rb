# require_relative 'table_manager'

class Contact < ActiveRecord::Base


 has_many :phones

 def self.find_all_by_lastname(name_argument)
  where(lastname:  name_argument)
end

def self.find_all_by_firstname(name_argument)
 where(firstname:  name_argument)
end

def self.find_all_by_email(name_argument)
  where(email:  name_argument)
end


def self.search_all(search)

  where("firstname LIKE ? OR lastname LIKE ? OR email LIKE ?", "%#{search}%","%#{search}%","%#{search}%")
end



end
