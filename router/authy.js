const express=require('express');
const router=express.Router();
const User = require("../models/userSchema");


      router.get("/", (req, res) => {
        res.render("index");
      });
      router.get("/login", (req, res) => {
        res.render("login");
      });
      router.get("/register", (req, res) => {
        res.render("register");
      });
      router.get("/error", (req, res) => {
        res.render("error");
      });
      router.get("/home", (req, res) => {
        res.render("home");
      });
      router.get("/namesearch", (req, res) => {
        res.render("namesearch");
      });
      router.get("/wordsearch", (req, res) => {
        res.render("wordsearch");
      });
      router.get("/card", (req, res) => {
        res.render("card");
      });
      router.get("/card2", (req, res) => {
        res.render("card2");
      });
      router.get("/abc", (req, res) => {
        res.render("abc");
      });
      router.get("/numbers", (req, res) => {
        res.render("numbers");
      });
      router.get("/between", (req, res) => {
        res.render("between");
      });
      router.get("/quiz", (req, res) => {
        
        res.render("quiz");
      });
      //register
      router.post('/register',(req,res)=>{
        const {name , email , phone , password , cpassword }=req.body;
        console.log(name);
       if(!name || !email || !phone || !password || !cpassword){
                return res.json({error:'nopes'});
       }
      
       User.findOne({email:email})
       .then((userexist)=>{
        if(userexist){
                return res.json({error:"email already registered"});
        }
        const user=new User({name,email,phone,password,cpassword});
        
        
        user.save().then(()=>{
                res.render("login");
        }).catch((err)=>res.json({error:"failed to registered"}));
        

       }).catch((err)=>{console.log(err);});




});
//login
router.post('/login',async(req,res)=>{
        try{
                const{email,password}=req.body;
                if(!email|| !password){
                        return res.alert("fill all details");
                        res.send("please fill all");
                }
                const userlogin=await User.findOne({email:email});
                console.log(userlogin);
                if(userlogin){
                        if(password!=userlogin.password){
                                return res.json({error:"incorrect password"});
                                
                        }else{
                          var n=userlogin.name;
                          var s=userlogin.score;

                          
                                res.render("home",{username:n});
                                
                        }
                }else{
                        res.json({error:"email is not registered"});
                }



        }catch(err){
                res.json({error:"error"});
        }
});





      
module.exports=router;