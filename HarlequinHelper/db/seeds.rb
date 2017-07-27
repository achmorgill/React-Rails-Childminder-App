# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Perform.delete_all
Task.delete_all
Child.delete_all


bethany = Child.create({
  name: "Bethany Brown",
  address: "52, Crown Street, Aberdeen",
  dob: "21-04-13",
  image: "/public/images/bethany.jpeg",
  emergency_contact: "Susan Brown (Mother) Tel: 07756398276",
  medical: "Nut allergy",
  age: 4
  })

tony = Child.create({
  name: "Tony Brown",
  address: "52, Crown Street, Methlick",
  dob: "10-02-12",
  image: "/public/images/tony.jpeg",
  emergency_contact: "Susan Brown (Mother) Tel: 07756398276",
  medical: "None",
  age: 5
  })

jenny = Child.create({
  name: "Jenny Miller ",
  address: "Templehill House, Auchnagatt",
  dob: "21-04-13",
  image: "/public/images/jenny.jpeg",
  emergency_contact: "Audrey Miller (Mother) Tel: 07253398276",
  medical: "Partial Hearing  in left ear",
  age: 4
  })

paula = Child.create({
  name: "Paula Thompson ",
  address: "Holly House, Auchnagatt",
  dob: "29-04-13",
  image: "/public/images/paula.jpeg",
  emergency_contact: "Duncan Thompson (Father) Tel: 07253378276",
  medical: "None",
  age: 4
  })

matthew = Child.create({
  name: "Matthew Jenkins",
  address: "23, Main Avenue, Tarves",
  dob: "21-09-13",
  image: "/public/images/matthew.jpeg",
  emergency_contact: "Mary Duncan (Mother) Tel: 07373398276",
  medical: "Hay Fever, Asthma",
  age: 4
  })

david = Child.create({
  name: "David Young ",
  address: "HopeTown Farm, Auchnagatt",
  dob: "29-04-13",
  image: "/public/images/david.jpeg",
  emergency_contact: "Gerald Young (Father) Tel: 07253398276",
  medical: "None",
  age: 4
  })

task1 = Task.create({
  name: "Bethany Brown",
  image: "/public/images/bucketsand.jpg",
  desc: "We went to the beach today.  The weather was hot and sunny.  Bethany had suncream on, wore her sunglasses and hat.  During our time out she drank lots of water.  We made sandcastles using our buckets and spades.  Bethany shared and helped her friends and had great fun.  She was kind and polite all day"
  })

task2 = Task.create({
  name: "Tony Brown",
  image: "/public/images/whatsthat.jpg",
  desc: "We went to the park today.  The weather was hot and sunny.  Tony  had suncream on, wore his sunglasses and hat.  During our time out he drank lots of water.  We played rounders on the grass and all the children had a great day.  Tony took part and had great fun, he followed instructions, helped his friends and had lots of exercise. He took care of his friend Timmy who was getting frustrated when he had problems hitting the ball"
  })

task3 = Task.create({
  name: "Jenny Miller",
  image: "/public/images/crafts.jpg",
  desc: "Today we had a crafts morning.  Jenny made a lovely picture.  She cut with scissor, used glue and used her imagination to design her creation.  She also helped her younger friend Polly with her craft project.  She was reluctant at first to participate but as soon as she saw how much fun the other children were having, she decided to join in.  It helped that the other children kept asking her to help them. "
  })

Perform.create({child: bethany, task: task1, date: "24-July-2017"})
Perform.create({child: tony, task: task2, date: "24-July-2017"})
Perform.create({child: jenny, task: task3, date: "24-July-2017"})



