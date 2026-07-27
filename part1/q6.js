
db.employees.insertOne({name:"temp name 1",salary:1000})

db.employees.insertOne({name:"temp name 2",salary:1000})

db.employees.insertOne({name:"temp name 3",salary:1000})

db.employees.deleteOne({name:"temp name 1"})

db.employees.deleteMany({salary:1000})