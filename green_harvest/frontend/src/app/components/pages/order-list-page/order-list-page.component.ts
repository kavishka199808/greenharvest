import { Component } from '@angular/core';
import {Item} from "../../../shared/models/Item";
import {ItemService} from "../../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {OrderService} from "../../../services/order.service";
import {Order} from "../../../shared/models/Order";

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent {

  orders: Order[] = [];
  constructor(private orderService: OrderService, activatedRoute: ActivatedRoute,private router: Router) {
    let ordersObservalbe:Observable<Order[]>;
    activatedRoute.params.subscribe((params) => {
        ordersObservalbe = orderService.getAll();

      ordersObservalbe.subscribe((serverItems) => {
        this.orders = serverItems;

      })
    })
  }

  ngOnInit(): void {
  }

}
