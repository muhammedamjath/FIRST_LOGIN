const fs=require('fs')
const userData=JSON.parse(fs.readFileSync('./model/data.json','utf-8'))

const dotget=(req,res)=>{
    if(req.session.email){
        res.render('home',{users:userData})
    }else{
        res.redirect('/')
    }
}
const dotpost=(req,res)=>{
    const {email,password}=req.body
    const user=userData.find((val)=> val.email=== email && val.password === password)
    if(user){
        req.session.email = email
        res.render('home',{users:userData}) 
    }else{
        console.log('kadakk purath.....')
        res.redirect('/')
    }
}

module.exports={dotget,dotpost}