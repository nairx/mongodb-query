
db.employees.find({email:"mike@gmail.com"}).explain("executionStats")

db.employees.createIndex({email:1})

db.employees.find({email:"mike@gmail.com"}).explain("executionStats")

db.employees.getIndexes()

db.employees.dropIndex("email_1")
