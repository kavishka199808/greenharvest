import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css','../home/css/bootstrap.min.css','../home/css/font-awesome.min.css','../home/css/elegant-icons.css','../home/css/magnific-popup.css','../home/css/nice-select.css','../home/css/slicknav.min.css','../home/css/style.css']
})
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(orderService: OrderService, router: Router) {
      orderService.getNewOrderForCurrentUser().subscribe({
        next: (order) => {
          this.order = order;
        },
        error:() => {
          router.navigateByUrl('/chekcout');
        }
      })

   }

  ngOnInit(): void {
  }

}
