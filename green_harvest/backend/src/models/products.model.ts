import {Schema, model} from 'mongoose';

export interface Item{
    id:string;
    name:string;
    price:number;
    catagory: string;
    countity:number;
}

export const ItemSchema = new Schema<Item>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        catagory: {type: String, required:true},
        countity: {type: Number, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const ProductsModel = model<Item>('item', ItemSchema);