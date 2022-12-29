import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  techData: any = [];

  ngOnInit(): void {
    this.api.fetchTech().subscribe({
      next: (result) => {
        console.log(result.articles);
        this.techData = result.articles;
      }
    })
  }

}
