import express from "express"
import mongoose from "mongoose"
import {} from "./models/"

export const ___router = express.Router();

router.get('/', async(request,response,next)=>{

     try{
const ____ = await model.find({})

return response.status(200).json({
count: .length,
data: ____
})


}catch(error){
 console.log(error.message)
 response.status(500).send({message: error.message})
 return next(error)
}

});


router.get('/:id', async(request,response,next)=>{

     try{

const {id} = request.params

const ___ = await ___.findById(id)

return response.status(200).json({data:____})

}catch(error){
 console.log(error.message)
 response.status(500).send({message: error.message})
 return next(error)
}

});



router.post('/', async(request,response,next)=>{

     try{
 if(!request.body. || !request.body. || !request.body.){
return response.status(400).send({
  message:'Send all required fields:'
})
}

const new = {
___: request.body.,
}
const newdata = await .create(new)
return reponse.json({newdata})

}catch(error){
 console.log(error.message)
 response.status(500).send({message: error.message})
 return next(error)
}

});


router.put('/:id', async(request,response,next)=>{

     try{

const {id} = request.params
}catch(error){
 console.log(error.message)
 response.status(500).send({message: error.message})
 return next(error)
}

});


router.delete('/:id', async(request,response,next)=>{

     try{

const {id} = request.params
}catch(error){
 console.log(error.message)
 response.status(500).send({message: error.message})
 return next(error)
}

});
