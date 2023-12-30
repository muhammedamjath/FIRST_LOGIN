const express=require('express')
// const path=require('path')
const router=express.Router()
const fs=require('fs')

const {dotget,dotpost}=require('../controller/signupcontroller')

router.get('/',dotget)
router.post('/',dotpost)



module.exports=router