db.employees.aggregate([
    {},
    {},
    {}
])

db.employees.aggregate([
    { $match: { salary: { $gt: 3000 } } },
])

db.employees.aggregate([
    { $project: { _id: 0, name: 1, salary: 1, department: 1 } },
])

db.employees.aggregate([
    { $limit: 3 },
])


db.employees.aggregate([
    { $sort: { name: 1 } },
])

db.employees.aggregate([
    { $skip: 1 }
])


db.employees.aggregate([
    { $match: { salary: { $gt: 3000 } } },
    { $project: { _id: 0, name: 1, salary: 1, department: 1 } },
    { $sort: { name: 1 } },
    { $limit: 3 },
    { $skip: 1 }
])


db.employees.aggregate([
    { $match: { salary: { $gt: 3000 } } },
    { $project: { _id: 0, name: 1, salary: 1, department: 1 } },
    { $limit: 3 },
])




