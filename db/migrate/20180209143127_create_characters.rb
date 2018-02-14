class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :player
      t.text :concept
      t.integer :maxHealth
      t.integer :currentHealth
      t.integer :brawn
      t.integer :agility
      t.integer :wit
      t.integer :intelligence
      t.integer :charm
      t.integer :presense
      t.integer :maxDodge
      t.integer :currentDrive
      t.integer :initiative
      t.integer :maxDrive
      t.integer :currentDrive

      t.timestamps
    end
  end
end
