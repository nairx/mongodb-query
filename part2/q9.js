db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "$salary" } } },
    { $sort: { total: -1 } },
    { $limit: 1 },
])