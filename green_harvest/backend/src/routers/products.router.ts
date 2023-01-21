import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ProductsModel} from "../models/products.model";
import {FoodModel} from "../models/food.model";
import {sample_foods, sample_questions, sample_sellers} from "../data";
import {SellerModel} from "../models/Seller.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const items = await ProductsModel.find();
        res.send(items);
    }
))

// router.get("/questions", asyncHandler(
//     async (req, res) => {
//         const question = await QuestionModel.find();
//         res.send(question);
//     }
// ))

// router.get("/seller", asyncHandler(
//     async (req, res) => {
//         const sellerCount = await SellerModel.countDocuments();
//         if(sellerCount> 0){
//             res.send("seller is already done!");
//             return;
//         }
//
//         await SellerModel.create(sample_sellers);
//         res.send("seller Is Done!");
//     }
// ))


router.post('/additem', asyncHandler(
    async (req, res) => {
        const {name, price,catagory,countity} = req.body;
        res.status(HTTP_SUCCESS)
                .send('ITEM ADDED SUCCESSFULLY!');
        const newItem:Item = {
            id:'',
            name,
            price,
            catagory,
            countity,
        }

        await ProductsModel.create(newItem);

    }
))

router.post('/updateitem', asyncHandler(
    async (req, res) => {
        const {name, price,catagory,countity} = req.body;
        res.status(HTTP_SUCCESS)
            .send('ITEM ADDED SUCCESSFULLY!');
        const newItem:Item = {
            id:'',
            name,
            price,
            catagory,
            countity,
        }

        await ProductsModel.updateOne(newItem);

    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const items = await ProductsModel.find({name: {$regex:searchRegex}})
        res.send(items);
    }
))

router.get("/:itemId", asyncHandler(
    async (req, res) => {
        const item = await ProductsModel.findById(req.params.itemId);
        res.send(item);
    }
))

//Delete Data

router.route('/:id').delete((req, res) => {
    ProductsModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;