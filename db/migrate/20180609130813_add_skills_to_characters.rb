class AddSkillsToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :athletics, :integer
    add_column :characters, :biology, :integer
    add_column :characters, :computers, :integer
    add_column :characters, :empathy, :integer
    add_column :characters, :engineering, :integer
    add_column :characters, :explosives, :integer
    add_column :characters, :firearms, :integer
    add_column :characters, :investigation, :integer
    add_column :characters, :law, :integer
    add_column :characters, :lying, :integer
    add_column :characters, :melee, :integer
    add_column :characters, :perform, :integer
    add_column :characters, :piloting, :integer
    add_column :characters, :persuasion, :integer
    add_column :characters, :sneaking, :integer
    add_column :characters, :spacewise, :integer
    add_column :characters, :survival, :integer
    add_column :characters, :telekinesis, :integer
    add_column :characters, :telepathy, :integer
    add_column :characters, :special, :integer
  end
end
