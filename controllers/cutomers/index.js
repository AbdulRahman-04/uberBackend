import express from "express"
import customerModel from "../../models/Customers/Customers.js"

const router = express.Router()

router.get("/getall", (req, res)=>{
    try {
        res.status(200).json({msg: `all customers are here🙌`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.get("/getone", (req, res)=>{
    try {

        res.status(200).json({msg: `one customer is here⚡`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.put("/edit", (req, res)=>{
    try {

        res.status(200).json({msg: 'one customer edited'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteone", (req, res)=> {
    try {

        res.status(200).json({msg: `one customer deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", (req, res)=> {
    try {

        res.status(200).json({msg: `all customers deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


export default router