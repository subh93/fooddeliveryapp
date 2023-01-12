const db = require('./db');

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const FoodItemsRoute = require('./routes/foodItemsRoutes')
const FoodCategoriesRoute = require('./routes/foodCategoryRoutes')
const UserRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server Working");
})

app.use('/api', FoodItemsRoute);
app.use('/api', FoodCategoriesRoute);
app.use('/api', UserRoute);
app.use('/api', ordersRoute);


app.listen(process.env.PORT, async()=>{
    await db;
    console.log(`Server is running on ${process.env.PORT}`)
})