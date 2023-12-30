const express=require('express')
const router=express.Router()
const {dotget,dotpost}=require('../controller/homecontroller')


router.get('/',dotget)
router.post('/',dotpost)



// function authentication(req,res,next){
    

// }


module.exports=router

