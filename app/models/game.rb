class Game < ApplicationRecord
	has_many :characters 
	has_many :users, through: :characters

	serialize :players, Array
end
