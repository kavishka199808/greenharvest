import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordsMatchValidator} from "../../../shared/validators/password_match_validator";
import {IAddItem} from "../../../shared/interfaces/IAddItem";
import {ItemService} from "../../../services/item.service";

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent implements OnInit{

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


    // this.activatedRoute.params.subscribe((params) => {
    // this.itemService.getItemById('63b6014f7df97a30e7e8872b').subscribe(serverItem => {
    //
    //   this.additemForm = this.formBuilder.group({
    //     name: [serverItem.name, [Validators.required, Validators.minLength(5)]],
    //     price: [serverItem.price, [Validators.required]],
    //     catagory: [serverItem.catagory, [Validators.required]],
    //     countity: [serverItem.countity, Validators.required],
    //   });
    //   //console.log("data",serverItem.name)
    //
    // });
    // })


    this.additemForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required]],
      catagory: ['', [Validators.required]],
      countity: ['', Validators.required],
    });

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

    this.itemService.additem(item).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

}
