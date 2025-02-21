import express from "express"
import driverModel from "../../models/Drivers/Drivers.js"
const router = express.Router()

router.get("/getall", (req, res)=>{
    try {
        res.status(200).json({msg: `all drivers are here🙌`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.get("/getone", (req, res)=>{
    try {

        res.status(200).json({msg: `one driver is here⚡`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.put("/edit", (req, res)=>{
    try {

        res.status(200).json({msg: 'one driver edited'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteone", (req, res)=> {
    try {

        res.status(200).json({msg: `one driver deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", (req, res)=> {
    try {

        res.status(200).json({msg: `all drivers deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


export default router