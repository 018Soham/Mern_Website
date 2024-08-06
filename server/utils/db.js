const mongoose=require('mongoose');

//DataBase Connection Function
const connectDb= async ()=>{

    try {
        
        const URI='mongodb+srv://soham:soham123@cluster0.yn3jemh.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0';
        mongoose.connect(URI);
        console.log("Server is Connected To DB");
    } catch (error) {
        console.log("Database Connection Failed");
    }
}
module.exports=connectDb;

