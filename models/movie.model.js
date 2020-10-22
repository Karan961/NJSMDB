const mongoose=require('mongoose')

var movieSchema=new mongoose.Schema({
	name:
	{
		type:String,
		required:true
		 
	},
	img:
	{
		type:String,
		required:true
	},
	summary:
	{
		type:String,
		required:true		
	}
})

mongoose.model('Movie',movieSchema);