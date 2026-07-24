
db.employees.find({ salary: 4600 })

db.employees.find({ salary: { $eq: 4600 } })

db.employees.find({ salary: { $gt: 3000 } })

db.employees.find({ salary: { $lt: 3000 } })

db.employees.find({ salary: { $gte: 2500 } })

db.employees.find({ salary: { $lte: 2500 } })

db.employees.find({ salary: { $ne: 2500 } })

db.employees.find({ salary: { $gt: 3000 }, department: { $eq: "IT" } })

db.employees.find({ salary: { $gt: 2500, $lt: 4600 } })

db.employees.find({ $and: [{}, {}] })

db.employees.find({ $and: [{ salary: { $gt: 2500 } }, { salary: { $lt: 4600 } }] })

//Display documents where salary > 2500 and department is IT
db.employees.find({ $and: [{ salary: { $gt: 2500 } }, { department: { $eq: "IT" } }] })
db.employees.find({ salary: { $gt: 2500 }, department: { $eq: "IT" } })

db.employees.find({ $or: [{ salary: { $gt: 2500 } }, { department: { $eq: "IT" } }] })

db.employees.find({ department: { $in: ["HR", "IT"] } })

db.employees.find({ department: { $nin: ["HR", "IT"] } })

db.employees.insertOne({
    name: "Brian Smith",
    email1: "brian@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["CA", "OH"],
    date: Date()
})

db.employees.find({ email: { $exists: false } })