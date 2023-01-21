import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ProductsModel} from "../models/products.model";
import {FoodModel} from "../models/food.model";
import {sample_foods, sample_questions, sample_sellers} from "../data";
import {SellerModel} from "../models/Seller.model";
import {QuestionModel, Questions} from "../models/questions.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const questions = await QuestionModel.find();
        res.send(questions);
    }
))

router.post('/addquestion', asyncHandler(
    async (req, res) => {
        const {question} = req.body;
        res.status(HTTP_SUCCESS)
            .send('ITEM ADDED SUCCESSFULLY!');
        const newQuestion:Questions = {
            id:'',
            question
        }

        await QuestionModel.create(newQuestion);

    }
))

export default router;