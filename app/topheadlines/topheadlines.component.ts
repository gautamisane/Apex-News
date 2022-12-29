import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private api: NewsapiService ) { }

  data: any = [];

  ngOnInit(): void {
    this.api.headlinesTop().subscribe ({
      next: (res) => {
        console.log(res.articles);
        this.data = res.articles;
      }
    })


  }

}
