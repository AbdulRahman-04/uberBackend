// import express from "express"
// import rideModel from "../../models/Ride/Ride.js"

// const router = express.Router()

// router.get("/getall", (req, res)=>{
//     try {
//         res.status(200).json({msg: `all rides are here🙌`})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })

// router.get("/getone", (req, res)=>{
//     try {

//         res.status(200).json({msg: `one ride is here⚡`})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })

// router.put("/edit", (req, res)=>{
//     try {

//         res.status(200).json({msg: 'one ride edited'})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })

// router.delete("/deleteone", (req, res)=> {
//     try {

//         res.status(200).json({msg: `one ride deleted`})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })

// router.delete("/deleteall", (req, res)=> {
//     try {

//         res.status(200).json({msg: `all rides deleted`})
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })


// export default router