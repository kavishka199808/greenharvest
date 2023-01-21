import { Component } from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Seller} from "../../../shared/models/Seller";
import {SellerService} from "../../../services/seller.service";

@Component({
  selector: 'app-allsellerslist-page',
  templateUrl: './allsellerslist-page.component.html',
  styleUrls: ['./allsellerslist-page.component.css']
})
export class AllsellerslistPageComponent {

  sellers: Seller[] = [];
  constructor(private sellerService:SellerService, activatedRoute: ActivatedRoute,private router: Router) {
    let sellerObservalbe:Observable<Seller[]>;
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
