class Character < ApplicationRecord
	belongs_to :game
	belongs_to :user

	before_save :set_health, :set_dodge, :set_drive, :set_init


	private

	def set_health
		self.maxHealth = self.brawn * 3
		self.currentHealth = self.maxHealth
	end

	def set_dodge
		self.maxDodge = (self.agility + self.wit) -2
	end

	def set_drive
		self.maxDrive = self.wit + self.presense
	end

	def set_init
		self.initiative = self.presense + self.agility
	end

end
