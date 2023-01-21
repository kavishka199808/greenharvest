import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  Observable} from 'rxjs';
import {
  FOOD_BY_ID_URL,
  FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL,
  FOODS_URL,
  ITEM_ADD_URL, ITEM_BY_ID_URL, ITEM_UPDATE_URL, ITEMS_BY_SEARCH_URL,
  ITEMS_URL,
  ORDER_CREATE_URL, QUESTION_ADD_URL, QUESTIONS_URL,
  USER_LOGIN_URL,
  USER_REGISTER_URL
} from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';
import {IAddItem} from "../shared/interfaces/IAddItem";
import {Item} from "../shared/models/Item";
import {Order} from "../shared/models/Order";
import {Food} from "../shared/models/Food";
import {Tag} from "../shared/models/Tag";
import {IUpdateItem} from "../shared/interfaces/IUpdateItem";
import {IDeleteItem} from "../shared/interfaces/IDeleteItem";
import {Questions} from "../shared/models/Questions";
import {IQuestion} from "../shared/interfaces/IQuestion";


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) {}


  getAll(): Observable<Questions[]> {
    return this.http.get<Questions[]>(QUESTIONS_URL);
  }

  addquestion(addquestion:IQuestion){
    return this.http.post<Questions>(QUESTION_ADD_URL, addquestion);
  }

}
