10.times do
  t = Trip.create(
    name: "My amazing #{Faker::Address.city} trip!"
  )
  5.times do
   t.locations.create(
      name: Faker::Address.city,
      days: Faker::Number.between(1, 10)
    )
    1.times do
      Address.create(
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip: Faker::Address.zip
      )
    end
  end
end

puts "seeded"

