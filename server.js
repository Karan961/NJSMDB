require('./models/db');
const express=require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const movieController=require('./controllers/movieController')
const bodyparser=require('body-parser')
var	app=express()
app.use(bodyparser.urlencoded({
	extended:true
}));
app.use(bodyparser.json());
app.set("views",path.join(__dirname,'/views/'));
app.use('/uploads', express.static('uploads'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutDir:__dirname+'/views/layouts/'}))
app.set('view engine','hbs')
app.use(express.static(__dirname));
var port=3000
app.listen(port,()=>{
	console.log('server started at port '+port)
})
app.use('/movie',movieController)