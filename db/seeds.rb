# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Image.delete_all


8.times do
  Image.create!(
    url: 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1529885719/default_pic_mqmdjz.jpg',
    ip: '::1'
  )
end

Image.create!(
  url: 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1529554873/Bitmap_a1vdlk.png',
  ip: '123.123.123.123'
)
