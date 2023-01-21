import { Component } from '@angular/core';
import {Item} from "../../../shared/models/Item";
import {ItemService} from "../../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {QuestionsService} from "../../../services/quections.service";
import {Questions} from "../../../shared/models/Questions";

@Component({
  selector: 'app-queactions-list-page',
  templateUrl: './queactions-list-page.component.html',
  styleUrls: ['./queactions-list-page.component.css']
})
export class QueactionsListPageComponent {
  quections: Questions[] = [];
  constructor(private questionsService:QuestionsService, activatedRoute: ActivatedRoute,private router: Router) {
    let questionsObservalbe:Observable<Questions[]>;
    activatedRoute.params.subscribe((params) => {
        questionsObservalbe = questionsService.getAll();

      questionsObservalbe.subscribe((serverItems) => {
        this.quections = serverItems;

      })
    })
  }

  ngOnInit(): void {
  }
}
