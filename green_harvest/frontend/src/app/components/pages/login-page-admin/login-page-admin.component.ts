import { Component } from '@angular/core';
import {Questions} from "../../../shared/models/Questions";
import {QuestionsService} from "../../../services/quections.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../../../shared/models/User";
import {UserService} from "../../../services/user.service";
import {Order} from "../../../shared/models/Order";
import {Item} from "../../../shared/models/Item";
import {Seller} from "../../../shared/models/Seller";
import {OrderService} from "../../../services/order.service";
import {ItemService} from "../../../services/item.service";
import {SellerService} from "../../../services/seller.service";

@Component({
  selector: 'app-login-page-admin',
  templateUrl: './login-page-admin.component.html',
  styleUrls: ['./login-page-admin.component.css']
})
export class LoginPageAdminComponent {

  users: User[] = [];
  orders: Order[] = [];
  items: Item[] = [];
  sellers: Seller[] = [];
  constructor(private userService:UserService,orderService: OrderService,itemService: ItemService,sellerService:SellerService, activatedRoute: ActivatedRoute,private router: Router) {
    let userObservalbe:Observable<User[]>;
    let ordersObservalbe:Observable<Order[]>;
    let itemsObservalbe:Observable<Item[]>;
    let sellerObservalbe:Observable<Seller[]>;
    activatedRoute.params.subscribe((params) => {
      userObservalbe = userService.getAll();

      userObservalbe.subscribe((serverItems) => {
        this.users = serverItems;

      })
    })

    activatedRoute.params.subscribe((params) => {
      ordersObservalbe = orderService.getAll();

      ordersObservalbe.subscribe((serverItems) => {
        this.orders = serverItems;

      })
    })

    activatedRoute.params.subscribe((params) => {

      itemsObservalbe = itemService.getAll();

      itemsObservalbe.subscribe((serverItems) => {
        this.items = serverItems;

      })
    })

    activatedRoute.params.subscribe((params) => {
      sellerObservalbe = sellerService.getAll();

      sellerObservalbe.subscribe((serverItems) => {
        this.sellers = serverItems;

      })
    })
  }


  ngOnInit(): void {
  }

}
