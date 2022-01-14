# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
Comment.destroy_all
User.destroy_all
puts "seeds destroyed"

puts "creating Users..."
user1 = User.create(first_name: 'McKinsey', last_name: 'Leckenby', email:"leckenbym11@gmail.com", password_digest: BCrypt::Password.create('mckinsey01'))


puts "Seeding books..."
book1 = Book.create(img_url: "https://images-na.ssl-images-amazon.com/images/I/41kjojdfsQL._SX310_BO1,204,203,200_.jpg", title: "Breasts and Eggs", author: "Mieko Kawakami", description: "Challenging every preconception about storytelling and prose style, mixing wry humor and riveting emotional depth, Kawakami is today one of Japan’s most important and best-selling writers. She exploded onto the cultural scene first as a musician, then as a poet and popular blogger, and is now an award-winning novelist.", pages: "448", genre: "Literary fiction")
book2 = Book.create(img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628791882l/1232._SY475_.jpg", title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", description: "Barcelona, 1945: A city slowly heals from its war wounds, and Daniel, an antiquarian book dealer's son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind, by one Julian Carax. But when he sets out to find the author's other works, he makes a shocking discovery: someone has been systematically destroying every copy of every book Carax has written. In fact, Daniel may have the last of Carax's books in existence. Soon Daniel's seemingly innocent quest opens a door into one of Barcelona's darkest secrets--an epic story of murder, madness, and doomed love.", pages: "487", genre: "Historical fiction")
book3 = Book.create(img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410981835l/22929741.jpg", title: "The Argonauts", author: "Maggie Nelson", description: "Maggie Nelson's The Argonauts is a genre-bending memoir, a work of 'autotheory' offering fresh, fierce, and timely thinking about desire, identity, and the limitations and possibilities of love and language. At its center is a romance: the story of the author's relationship with the artist Harry Dodge. This story, which includes Nelson's account of falling in love with Dodge, who is fluidly gendered, as well as her journey to and through a pregnancy, offers a firsthand account of the complexities and joys of (queer) family-making.", pages: "160", genre: "Nonfiction")
book4 = Book.create(img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351500256l/89213.jpg", title: "Close to the Knives", author: "David Wojnarowicz", description: "In Close to the Knives, David Wojnarowicz gives us an important and timely document: a collection of creative essays - a scathing, sexy, sublimely humorous and honest personal testimony to the 'Fear of Diversity in America' From the author's violent childhood in suburbia to eventual homelessness on the streets and piers of New York City, to recognition as one of the most provocative artists of his generation -- Close to the Knives is his powerful and iconoclastic memoir. Street life, drugs, art and nature, family, AIDS, politics, friendship and acceptance: Wojnarowicz challenges us to examine our lives -- politically, socially, emotionally, and aesthetically", pages: "288", genre: "Nonfiction")

puts "Seeding comments..."
comment1 = Comment.create(user_id: user1.id, book_id: book1.id, comment: "Riveting")
comment2 = Comment.create(user_id: user1.id, book_id: book2.id, comment: "Good soup")
comment3 = Comment.create(user_id: user1.id, book_id: book2.id, comment: "My favorite book to this day, such an easy light read")
comment4 = Comment.create(user_id: user1.id, book_id: book3.id, comment: "Profound and intentional")
comment5 = Comment.create(user_id: user1.id, book_id: book3.id, comment: "I love Maggie's work - always discover new messages when reread")
comment6 = Comment.create(user_id: user1.id, book_id: book1.id, comment: "Had been wanting this translation and did not disappoint")
comment7 = Comment.create(user_id: user1.id, book_id: book4.id, comment: "Thoroughly enjoy what I understand of this book - hehe")

puts "done seeding"