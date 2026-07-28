db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "$salary" } } },
    { $sort: { total: -1 } },
    { $limit: 1 },
])

db.employees.aggregate([
    { $project: { name: 1, dept: "$department" } }
])

db.employees.aggregate([
    {
        $project: {
            name: 1,
            salary: 1,
            AnnualSalary: { $multiply: [12, "$salary"] }
        }
    }
])