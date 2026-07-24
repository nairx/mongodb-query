db.employees.insertOne({
    name: "John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date()
})

db.employees.insertMany([
    {
        name: "Mike Jose",
        email: "mike@gmail.com",
        department: "IT",
        salary: 3543,
        location: ["FL", "TX"],
        date: Date()
    },
    {
        name: "Cathy Covington",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 4600,
        location: ["AZ", "TX"],
        date: Date()
    },
])

db.employees.insertMany([
    {
        name: "Chastity Fisher",
        email: "chastity@gmail.com",
        department: "HR",
        salary: 2500,
        location: ["FL", "CA"],
        date: Date()
    },
    {
        name: "Shawn Lenahan",
        email: "shawn@gmail.com",
        department: "HR",
        salary: 4600,
        location: ["HI", "TX", "AK"],
        date: Date()
    },
])

db.employees.find()