class AddGameIdToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :game_id, :integer
  end
end
