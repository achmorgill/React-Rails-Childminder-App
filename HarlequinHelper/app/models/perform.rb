class Perform < ActiveRecord::Base
  belongs_to :child
  belongs_to :task
end
