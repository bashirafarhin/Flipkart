import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id : String,
    url : String,
    defaultUrl : String,
    title : Object,
    price : Object,
    quantity : Number,
    description : String,
    discount : String,
    tagline : String
})

const Product = new mongoose.model('product',productSchema);
export default Product;