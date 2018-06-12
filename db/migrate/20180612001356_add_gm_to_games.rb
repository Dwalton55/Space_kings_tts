class AddGmToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :gm_id, :int
  end
end
