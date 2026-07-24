//update query

db.employees.updateOne({}, {})

db.employees.updateOne({ email: "cathy@gmail.com" }, { $set: { department: "Admin" } })

db.employees.updateMany({}, { $set: { points: 5 } })

db.employees.updateOne({ email: "jeff@gmail.com" }, {
    $set: {
        name: 'Jeff Joseph',
        email1: 'jeff@gmail.com',
        department: 'IT',
        salary: 5200,
    }
}, { upsert: true })
