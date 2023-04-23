const express = require("express")
const router = express.Router()
const Data = require("../model/dataModel")

router.get("/get-data/:number", async (req, res) => {
    try {
        const number = req.params.number
        console.log(typeof (number))
        let data = []
        if (number === "0") {
            data = await Data.find()
        }
        else if (number === "1") {
            data = await Data.find({
                $and: [{ income: { $lt: 5 } }, { $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }] }]
            })
        }
        else if (number === "2") {
            data = await Data.aggregate([
                {
                    $addFields: {
                        convertedPhonePrice: {
                            $toInt: "$phone_price"
                        }
                    }
                },
                {
                    $match: { convertedPhonePrice: { $gt: 10000 }, gender: "Male" }
                }
            ])
        }
        else if (number === "3") {
            const curr = await Data.find()
            curr.map((el, key) => {
                if (el.last_name[0] === "M" && el.quote.trim().length > 15 && el.email.includes(el.last_name.toLowerCase()) || el.email.includes(el.last_name) || el.email.includes(el.last_name.toUpperCase())) {
                    data.push(el)
                }
            })
        }
        else if (number === "4") {
            const curr = await Data.find({
                $or: [{ car: "Audi" }, { car: "Mercedes-Benz" }, { car: "BMW" }]
            })
            let alpha = "0123456789"
            curr.map((el, key) => {
                var chkr = true
                for (let i = 0; i < el.email.length; i++) {
                    if (alpha.includes(el.email[i])) {
                        chkr = false
                    }
                }
                if (chkr) {
                    data.push(el)
                }
            })
        }
        else {
            data = await Data.aggregate([
                {
                    $group: {
                        _id: "$city", count: { $sum: 1 }, avgIncome: { $avg: "$income" }, doc: { $firstN: { input: "$$ROOT", n: 3 } }
                    }
                },
                {
                    $sort: {
                        count: -1, avgIncome: -1
                    }
                },
                {
                    $limit: 10
                }
            ])
        }
        return res.status(200).json({
            status: "success",
            message: "UPDATED !",
            data
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Something Went Wrong !!"
        })
    }
})


module.exports = router