import {Component, OnInit} from '@angular/core';
import {Food} from "../../../shared/models/Food";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Item} from "../../../shared/models/Item";
import {ItemService} from "../../../services/item.service";
import {CartItem} from "../../../shared/models/CartItem";
import {IAddItem} from "../../../shared/interfaces/IAddItem";

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{

  isDeleted = false;
  returnUrl = 'seller';

  items: Item[] = [];
  constructor(private itemService: ItemService, activatedRoute: ActivatedRoute,private router: Router) {
    let itemsObservalbe:Observable<Item[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        itemsObservalbe = this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      else
        itemsObservalbe = itemService.getAll();

      itemsObservalbe.subscribe((serverItems) => {
        this.items = serverItems;

      })
    })
  }

  ngOnInit(): void {
  }

  removeFromItem(){
    this.itemService.deleteItemById('63b73025cc7a6d25859a0b77').subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }


}
