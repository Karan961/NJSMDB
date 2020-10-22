const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/moviedb",{ useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
	if(!err)
	{
			console.log('established ');
	}
	else
	{
		console.log('Failed');
    }});
require('./movie.model')
	