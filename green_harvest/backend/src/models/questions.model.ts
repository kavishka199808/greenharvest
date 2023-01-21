import {Schema, model} from 'mongoose';

export interface Questions{
    id:string;
    question:string;
}

export const QuestionsSchema = new Schema<Questions>(
    {
        question: {type: String, required:true},
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

export const QuestionModel = model<Questions>('question', QuestionsSchema);