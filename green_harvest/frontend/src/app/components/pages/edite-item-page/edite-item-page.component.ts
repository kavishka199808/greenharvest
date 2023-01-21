import {Component, OnInit} from '@angular/core';
import {Food} from "../../../shared/models/Food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {CartService} from "../../../services/cart.service";
import {Item} from "../../../shared/models/Item";
import {ItemService} from "../../../services/item.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IAddItem} from "../../../shared/interfaces/IAddItem";

@Component({
  selector: 'app-edite-item-page',
  templateUrl: './edite-item-page.component.html',
  styleUrls: ['./edite-item-page.component.css']
})
export class EditeItemPageComponent implements OnInit {
  // additemForm!: FormGroup;
  // isSubmitted = false;
  //
  // returnUrl = '';
  //
  // constructor(
  //   activatedRoute: ActivatedRoute,
  //   itemService: ItemService,
  //   private router: Router) {}
  //
  //
  // ngOnInit(): void {
  //
  //      this.activatedRoute.params.subscribe((params) => {
  //       if(params.id)
  //
  //         this.itemService.getItemById(params.id).subscribe(serverItem => {
  //           this.items = serverItem;
  //
  //         });
  //     })
  //     console.log("activatedRoute",this.items)
  //   }
  //
  //
  // }

  additemForm!:FormGroup;
  isSubmitted = false;

  returnUrl = 'seller';
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe((params) => {
      this.itemService.getItemById(params.id).subscribe(serverItem => {

        this.additemForm = this.formBuilder.group({
          name: [serverItem.name, [Validators.required, Validators.minLength(5)]],
          price: [serverItem.price, [Validators.required]],
          catagory: [serverItem.catagory, [Validators.required]],
          countity: [serverItem.countity, Validators.required],
        });
        //console.log("data",serverItem.name)

      });
    })


    // this.additemForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(5)]],
    //   price: ['', [Validators.required]],
    //   catagory: ['', [Validators.required]],
    //   countity: ['', Validators.required],
    // });

   // this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.additemForm.controls;
  }

  submit(){
    // this.isSubmitted = true;
    // if(this.additemForm.invalid) return;

    const fv= this.additemForm.value;
    const item :IAddItem = {
      name: fv.name,
      price: fv.price,
      catagory: fv.catagory,
      countity: fv.countity,
    };

    this.itemService.updateitem(item).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

  removeFromItem(){

    this.activatedRoute.params.subscribe((params) => {
      this.itemService.deleteItemById(params.id).subscribe(_ => {
        this.router.navigateByUrl(this.returnUrl);
      })
    })
  }
}
