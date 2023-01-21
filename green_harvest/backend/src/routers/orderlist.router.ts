import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ProductsModel} from "../models/products.model";
import {FoodModel} from "../models/food.model";
import {OrderModel} from "../models/order.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const orders = await OrderModel.find();
        res.send(orders);
    }
))



export default router;