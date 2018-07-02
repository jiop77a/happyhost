@images.each do |image|
  json.set! image.id do
    json.partial! 'image', image: image
  end
end

# json.set! 'images' do
#   json.array!(@images) do |image|
#     json.partial! 'image', image: image
#   end
# end
