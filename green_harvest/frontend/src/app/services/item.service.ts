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
  ORDER_CREATE_URL, QUESTIONS_URL,
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


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {}

  additem(addItem:IAddItem){
    return this.http.post<Item>(ITEM_ADD_URL, addItem);
  }

  updateitem(updateItem:IUpdateItem){
    return this.http.post<Item>(ITEM_UPDATE_URL, updateItem);
  }

  // deleteitem(deleteItem:IDeleteItem){
  //   return this.http.delete<Item>(ITEM_UPDATE_URL, deleteItem);
  // }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(ITEMS_URL);
  }


  getAllItemsBySearchTerm(searchTerm: string) {
    return this.http.get<Item[]>(ITEMS_BY_SEARCH_URL + searchTerm);
  }
  getItemById(itemId:string):Observable<Item>{
    return this.http.get<Item>(ITEM_BY_ID_URL + itemId);
  }

  deleteItemById(itemId:string):Observable<Item>{
    return this.http.delete<Item>(ITEM_BY_ID_URL + itemId);
  }

  // removeFromItem(itemId: string): void {
  //   this.cart.items = this.cart.items
  //     .filter(item => item.food.id != itemId);
  //   this.setCartToLocalStorage();
  // }




}
