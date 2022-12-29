import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  dummy: any = [];
  ngOnInit(): void {
    this.api.bizNews().subscribe({
      next: (ans) => {
        this.dummy = ans.articles;
      }
    })
  }

}
