import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../../services/quections.service";
import {IQuestion} from "../../../shared/interfaces/IQuestion";


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['../home/css/bootstrap.min.css','../home/css/font-awesome.min.css','../home/css/elegant-icons.css','../home/css/magnific-popup.css','../home/css/nice-select.css','../home/css/slicknav.min.css','../home/css/style.css']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  addquestionForm!:FormGroup;
  isSubmitted = false;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,private formBuilder: FormBuilder,private questionservice:QuestionsService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverFood => {
        this.food = serverFood;
      });
    })
   }

  ngOnInit(): void {
    this.addquestionForm = this.formBuilder.group({
      question: ['', [Validators.required]],
    });
  }
  get fc() {
    return this.addquestionForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.addquestionForm.invalid) return;

    const fv= this.addquestionForm.value;
    const questions :IQuestion = {
      question: fv.question,
    };

    this.questionservice.addquestion(questions).subscribe(_ => {
      // this.router.navigateByUrl(this.returnUrl);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
