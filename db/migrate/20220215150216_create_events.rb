class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.date :from_date
      t.date :to_date
      t.string :name

      t.timestamps
    end
  end
end
