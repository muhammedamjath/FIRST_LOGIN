const fs=require('fs')

const dotget=(req,res)=>{
    if(req.session.email){
        res.redirect('/home')
    }else{
        res.render('signUp')
    }
}

const dotpost=(req,res)=>{
    const {firstName,seconName,number,email,password,Conformpassword}=req.body
    if(firstName=='' || seconName == '' || number==''|| email=='' || password=='' || Conformpassword=='' ){
        res.redirect('/signup')
    }
    const reqdata=req.body
    let userData=[]
    userData.push(reqdata)
    res.redirect('/')
    fs.readFile('./model/data.json','utf-8',(err,data)=>{
        if(err){
            console.log('error')
        }else{
            const parseData=JSON.parse(data)
            const concatData=userData.concat(parseData)
            const stringData=JSON.stringify(concatData ,null,2)
            fs.writeFile('./model/data.json',stringData,(err)=>{
                if(err){
                    console.log('error found')
                }else{
                    console.log('stringData');
                }
            })
        }
    })
}



module.exports={dotget,dotpost}