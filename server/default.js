import { products } from "./constants/data.js"
import Product from "./Database/model/product.js"
const defaultData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
    } catch(err) {
        console.log("Error while inserting default data");
    }
}

export default defaultData;