import express from "express"
import {router }from "./src/myRoutes"

export const app = express()
app.use(express.json())
app.use("/my-routes",router)
// app.listen(8080,()=>{
// 	console.log("server is listening on port 8080")
// })


