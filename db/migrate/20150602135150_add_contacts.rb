class AddContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      # t.string :name
      t.string :firstname
      t.string :lastname
      t.string :email
    
    end
  end
end