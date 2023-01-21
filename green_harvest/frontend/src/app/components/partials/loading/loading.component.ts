import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css','../../pages/home/css/bootstrap.min.css','../../pages/home/css/font-awesome.min.css','../../pages/home/css/elegant-icons.css','../../pages/home/css/nice-select.css','../../pages/home/css/slicknav.min.css','../../pages/home/css/style.css']
})
export class LoadingComponent implements OnInit {

  isLoading!: boolean;
  constructor(loadingService: LoadingService) {
    loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });


   }

  ngOnInit(): void {
  }

}
