import express from "express"
import cors from "cors"
import env from "dotenv"
import bodyParser from "body-parser"
import "./Database/connect.js"
import defaultData from "./default.js"
import router from "./routes/route.js"

const app=express();
const port = process.env.PORT || 3000 ;
const corsOption={
    origin: process.env.FRONTEND_URL
}


//middlewares
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});
app.use(cors(corsOption));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//calling function
defaultData();

//routes
app.use('/',router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});