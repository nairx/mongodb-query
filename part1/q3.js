db.employees.find()

db.employees.find({},{name:1,dept:"$department",email:1})

db.employees.findOne()

db.employees.find().skip(1)

db.employees.find().sort({name:1})
db.employees.find().sort({name:-1})

db.employees.find().limit(1)

db.employees.find().sort({name:1}).limit(3)

db.employees.find({department:"IT"},{name:1,department:1})

db.employees.find({department:"IT"},{_id:0,name:1,department:1})

//db.employees.find({filters},{fields to display or hide})
db.employees.find({department:"IT"},{email:0,salary:0})
db.employees.find({department:"IT"},{email:1,salary:1})
db.employees.find({department:"IT"},{email:true,salary:true})

//Query to display all the documents and display only name and department
db.employees.find({},{_id:0,name:1,department:1})

//We can use either 0 or 1 except _id



