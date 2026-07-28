
db.orders.insertOne({
    empid: ObjectId('6a61d0d3671580c2d406af95'),
    orderValue: 900
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

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"order_details"
    }},
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"order_details"
    }},
    {$unwind:"$order_details"},
    {$project:{_id:0,name:1,email:1,"order_details.orderValue":1}}
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"order_details"
    }},
    {$unwind:"$order_details"},
    {$project:{_id:0,name:1,email:1,orderValue:"$order_details.orderValue"}}
])


//create a new collection
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"order_details"
    }},
    {$unwind:"$order_details"},
    {$project:{_id:0,name:1,email:1,orderValue:"$order_details.orderValue"}},
    {$out:"empOrders"}
])


//create view
db.createView("empOrderView","employees",[
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"order_details"
    }},
    {$unwind:"$order_details"},
    {$project:{_id:0,name:1,email:1,orderValue:"$order_details.orderValue"}},
])

db.empOrderView.find()

db.empOrderView.drop()