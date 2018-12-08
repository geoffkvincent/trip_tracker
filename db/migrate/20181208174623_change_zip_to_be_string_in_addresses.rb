class ChangeZipToBeStringInAddresses < ActiveRecord::Migration[5.2]
  def change
    change_column :addresses, :zip, :string
  end
end
