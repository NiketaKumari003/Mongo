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

const user2=new User({
    name:"Rahul",
    email:"abc@yahoo.in",
    age:46,
});
user2
.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});