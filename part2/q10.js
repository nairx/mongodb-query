db.employees.aggregate([
    { $project: { name: 1, location: 1 } },
    { $unwind: "$location" }
])

//$cond
db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            grade: { $cond: [{ $gt: ["$salary", 2000] }, "Grade A", "Grade B"] }
        }
    }
])


//$cond-if
db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            grade: { $cond: { if: { $gt: ["$salary", 2000] }, then: "Grade A", else: "Grade B" } }
        }
    }
])

//switch-case
db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            grade: {
                $switch: {
                    branches: [
                        { case: { $gte: ["$salary", 7000] }, then: "Grade A" },
                        { case: { $gte: ["$salary", 5000] }, then: "Grade B" },
                        { case: { $gte: ["$salary", 2000] }, then: "Grade C" },
                    ],
                    default: "Grade D"
                }
            }
        }
    }
])
