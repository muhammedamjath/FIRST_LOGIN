const express=require('express')
const router=express.Router()
const {loginget}=require('../controller/logincontroller')

router.get('/',loginget)


module.exports=router