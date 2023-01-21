import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ProductsModel} from "../models/products.model";
import {FoodModel} from "../models/food.model";
import {sample_foods, sample_questions, sample_sellers} from "../data";
import {SellerModel} from "../models/Seller.model";
import {QuestionModel} from "../models/questions.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const sellers = await SellerModel.find();
        res.send(sellers);
    }
))

export default router;