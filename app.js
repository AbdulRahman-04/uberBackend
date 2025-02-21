import express from "express"
import config from "config"
import customerRouter from "./controllers/cutomers/index.js"
import driverRouter from "./controllers/drivers/index.js"
// import rideRouter from "./controllers/ride/index.js"
import publicRouter from "./controllers/public/index.js"
import "./utils/dbConnect.js"

const app = express()

const PORT = config.get("PORT");

app.use(express.json())

app.get("/", (req, res)=>{
    try {

        res.status(200).json({msg: `your web app is running!😎`});
        
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: error})
    }
})

app.use("/api/public", publicRouter)

// app.use(validator)

app.use("/api/customers", customerRouter);
app.use("/api/drivers", driverRouter);
// app.use("/api/ride", rideRouter);


app.listen(PORT, ()=>{
    console.log(`your server is running at port ${PORT}`);
    
})