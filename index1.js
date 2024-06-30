const mongoose = require('mongoose');

main()
.then(()=>
{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User=mongoose.model("User",userSchema);
User.insertMany([
    {name:"Tony",email:"abc@gmail.com",age:50},
    {name:"Steve",email:"xyz@gmail.com",age:30},
    {name:"Bruce",email:"pqr@gmail.com",age:40},
]).then((res)=>{
    console.log(res);
});