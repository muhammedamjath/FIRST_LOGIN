let express=require('express')
const noCache=require('nocache')
const  session=require('express-session')
const dotenv=require('dotenv').config()
let app=express()
const port=process.env.port || 6060



const login=require('./router/login')
const signup=require('./router/signup')
const home=require('./router/home')
const logout=require('./router/logout')


app.use(noCache())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use(session({
    secret: 'amjad',
    resave: true,
    saveUninitialized: true
  }))

app.set('view engine','ejs')
app.set('views','views')



app.use('/',login)
app.use('/signup',signup)
app.use('/home',home)
app.use('/logout',logout)



 
app.listen(port,()=>console.log(`server created on ${port} port ` ))