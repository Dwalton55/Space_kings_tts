class Character < ApplicationRecord
	belongs_to :game
	belongs_to :user

	before_create :set_health, :set_dodge, :set_drive, :set_init
	validates :name, presence: true
	validates :player, presence: true

	private

	#Set Max Health Based on Brawn
	def set_health
		self.maxHealth = self.brawn * 3
		self.currentHealth = self.maxHealth
	end

	#Set Max Dodge Based on agility and wit
	def set_dodge
		self.maxDodge = (self.agility + self.wit) -2
	end

	#Set Max Drive Based on wit and presense
	def set_drive
		self.maxDrive = self.wit + self.presence
		self.currentDrive = self.maxDrive
	end

	#Set Initiative Based on presense and agility
	def set_init
		self.initiative = self.presence + self.agility
	end

end
