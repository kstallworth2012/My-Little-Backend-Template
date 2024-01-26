import express from "express"
export const router = express.Router()


router.get('/',(request,response,next)=>{
	return response.send("<h1>HELLO EVERYBODY</h1>")
})


