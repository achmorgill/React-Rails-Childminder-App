# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Child.delete_all
Task.delete_all

bethany = Child.create({
  name: "Bethany Brown",
  address: "52, Crown Street, Aberdeen",
  dob: "21-04-13",
  image: "bethanybrown.jpeg",
  emergency_contact: "Susan Brown (Mother) Tel: 07756398276",
  medical: "Nut allergy",
  age: 4
  })

tony = Child.create({
  name: "Tony Brown",
  address: "52, Crown Street, Methlick",
  dob: "10-02-12",
  image: "tonybrown.jpeg",
  emergency_contact: "Susan Brown (Mother) Tel: 07756398276",
  medical: "None",
  age: 5
  })

jenny = Child.create({
  name: "Jenny Miller ",
  address: "Templehill House, Auchnagatt",
  dob: "21-04-13",
  image: "bethanybrown.jpeg",
  emergency_contact: "Audrey Miller (Mother) Tel: 07253398276",
  medical: "Partial Hearing  in left ear",
  age: 4
  })

task1 = Task.create({
  name: "Bethany Brown",
  image: "parkVisit1.jpeg",
  desc: "We went to the park today.  The weather was hot and sunny.  Bethany had suncream on, wore her sunglasses and hat.  During our time out she drank lots of water.  We played rounders on the grass and all the children had a great day.  Bethany took part and had great fun, she followed instructions, helped her friends and had lots of exercise"
  })

task2 = Task.create({
  name: "Tony Brown",
  image: "parkVisit1.jpeg",
  desc: "We went to the park today.  The weather was hot and sunny.  Tony  had suncream on, wore his sunglasses and hat.  During our time out he drank lots of water.  We played rounders on the grass and all the children had a great day.  Tony took part and had great fun, he followed instructions, helped his friends and had lots of exercise. He took care of his friend Timmy who was getting frustrated when he had problems hitting the ball"
  })

task3 = Task.create({
  name: "Jenny Miller",
  image: "parkVisit1.jpeg",
  desc: "We went to the park today.  The weather was hot and sunny.  Bethany had suncream on, wore her sunglasses and hat.  During our time out she drank lots of water.  We played rounders on the grass and all the children had a great day.  Bethany took part and had great fun, she followed instructions, helped her friends and had lots of exercise.  She wasn't keen on playing at the beginning but after we had explained the rules to her and she understood them, she was a very enthusiastic player"
  })

Perform.create({child: bethany, task: task1, date: "24-July-2017"})
Perform.create({child: tony, task: task2, date: "24-July-2017"})
Perform.create({child: jenny, task: task3, date: "24-July-2017"})



