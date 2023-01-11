class CreateSavedProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_profiles do |t|
      t.references :company, foreign_key: true
      t.references :jobseeker, foreign_key: true


      t.timestamps
    end
  end
end
