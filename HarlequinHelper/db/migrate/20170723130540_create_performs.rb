class CreatePerforms < ActiveRecord::Migration
  def change
    create_table :performs do |t|
      t.string :date
      t.references :child, index: true, foreign_key: true
      t.references :task, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
