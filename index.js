import express from 'express';
import routeNotif from "./routes/index.js"; //import route dari routes/index.js
import mongoose from "mongoose";
const app = express()
const port = 3030
//membuat koneksi ke mongoose
mongoose.connect("mongodb://localhost:27017/react_api",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open', ()=>console.log("Database Connected")); 
app.use(express.json());//menerima respon client
app.use('/notification',routeNotif);
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
})