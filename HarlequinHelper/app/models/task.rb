class Task < ActiveRecord::Base
  
  has_many :performs
  has_many :children, through: :performs

end
