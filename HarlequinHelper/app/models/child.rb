class Child < ActiveRecord::Base

  has_many :performs
  has_many :tasks, through: :performs
end
