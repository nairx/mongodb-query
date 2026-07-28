db.createCollection("orders")

db.orders.insertOne({
    empid: ObjectId('6a61d0d3671580c2d406af95'),
    orderValue: 500
})

db.orders.insertOne({
    empid: ObjectId('6a61d0e6671580c2d406af97'),
    orderValue: 700
})

db.orders.aggregate([
    {
        $lookup: {
            from: "employees",
            localField: "empid",
            foreignField: "_id",
            as: "emp_details"
        }
    }
])

db.orders.aggregate([
    {
        $lookup: {
            from: "employees",
            let: { uid: "$empid" },
            pipeline: [
                { $match: { $expr: { $eq: ["$_id", "$$uid"] } } }
            ],
            as: "emp_details"
        },
    }
])


