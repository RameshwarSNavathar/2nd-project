const express=require("express");
const mongoose=require("mongoose");
const route=require("./routes/route");
const app=express();
app.use(express.json());


mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Rameshwar:kkX7KQpRaKAxNuew@programr.r4qditm.mongodb.net/?retryWrites=true&w=majority")

.then(() => {console.log("MongoDB is connected! 😎")})
.catch((errors) => {console.log(errors.message)})

app.use("/", route);

app.listen(4000, function () {
console.log("Server start successfully!",+ 4000)
})


