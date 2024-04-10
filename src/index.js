// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path: './env'})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running on PORT: ${process.env.P}`);
    })
})
.catch((err) => {
    console.log('MONGODB connection failed !!!',err);
})



// function connectDB(){

// }

/*

( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error",()=>{
        console.log("Error", error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on PORT ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("Error : ", error)
        throw error
    }
})()

*/