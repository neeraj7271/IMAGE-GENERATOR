import express from "express";
import dotenv from "dotenv";
import router from "./routes/user.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const port = process.env.PORT || 4000

app.use("/api/v1", router);
  
app.use(express.urlencoded({
    extended: true
}))
  
app.get("/", (req, res) => {
    res.send(`<h1>you code is running fine..</h1>`)
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})






