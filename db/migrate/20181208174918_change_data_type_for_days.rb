class ChangeDataTypeForDays < ActiveRecord::Migration[5.2]
  def change
    change_column :locations, :days, :string
  end
end
