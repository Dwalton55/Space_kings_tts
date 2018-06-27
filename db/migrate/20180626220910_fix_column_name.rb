class FixColumnName < ActiveRecord::Migration[5.1]
  def change
  	rename_column :characters, :presense, :presence
  end
end
