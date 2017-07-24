class CreateChildren < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :name
      t.string :address
      t.integer :age
      t.string :image
      t.string :dob
      t.string :emergency_contact
      t.string :medical

      t.timestamps null: false
    end
  end
end
