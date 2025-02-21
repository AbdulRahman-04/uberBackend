import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import customerModel from "../../models/Customers/Customers.js"
import driverModel from "../../models/Drivers/Drivers.js"
// import rideModel from "../../models/Ride/Ride.js"
import jwt from "jsonwebtoken"


const router = express.Router();

router.post("/registercustomer", async (req, res)=>{
    try {

        let userInp = req.body;

        //Duplicate check
        let checkDuplicate = await customerModel.findOne({email: userInp.email})
        if(checkDuplicate){
            return res.status(200).json({msg: `user already exists`})
        }

        let hashPass = await bcrypt.hash(userInp.password, 10);
        userInp.password = hashPass

        await customerModel.create(userInp)
        res.status(200).json({msg: `customer registered successfully!`})
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.post("/registerdriver", async (req, res)=>{
    try {

        let userData = req.body;

        // Duplicate Check

        let checkDuplicate = await driverModel.findOne({email: userData.email})

        if(checkDuplicate){
            return res.status(401).json({msg: `driver already exists`})
        }
      
        // password hash

        let hashPass = await bcrypt.hash(userData.password, 10)

        userData.password = hashPass;
        
        // updating into db
        await driverModel.create(userData)

        res.status(200).json({msg: `driver registered successfully!`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


// router.post("/addride", async (req, res)=>{
//     try {
//         let rideInfo = req.body;

//         await rideModel.create(rideInfo);

//         res.status(200).json({msg: `ride ADDED successfully!`})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })



// LOGIN API'S

router.post("/logincustomer", async (req, res)=>{
    try {
        let customerInfo = req.body;

        // check if customer is there in db

        let checkDB = await customerModel.findOne({email: customerInfo.email})

        if(!checkDB){
            return res.status(401).json({msg: `user not found!`})
        }

        
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

 
export default router