const express=require('express')
var router=express.Router()
const mongoose=require('mongoose')
var path    = require("path");
const {ObjectId} = require("mongodb");
const Movie=mongoose.model('Movie')
const multer=require('multer')
const uploads=multer({dest:'uploads/'})

mongoose.set('useFindAndModify', false);
router.get('/',(req,res)=>{
	res.render('movie/addOrEdit',
	{
		viewTitle:"Insert movie"
	
	})
})

router.post('/',(req,res)=>{
	if(req.body._id == '')
	    {
		insert(req,res);
		}
	else
	    {
		update(req,res);
		}
})

function insert(req,res)
{
		 var movie=new Movie();
		 movie.name=req.body.name
		 movie.img=req.body.img;
		 movie.summary=req.body.summary;
	
		 movie.save((err,doc)=>
		 {
			 if(!err)
			 {
				 res.redirect('movie/list')
			 }
			 else
			     {
				 res.render('movie/addOrEdit',{
					 viewTitle:"Insert movie",
					 movie:req.body
					
				 })
				 console.log('Error during record insertion'+err)
			 }
		 })
}
router.get('/list',(req,res)=>{

	Movie.find((err,docs)=>{
			if(!err)
			{
					res.render('movie/list',{
					list:docs
					})
			}
			else
			{
				console.log("Error while showing data"+err)
			}
		}).lean()
})

module.exports=router