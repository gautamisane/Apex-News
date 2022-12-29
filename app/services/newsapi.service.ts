import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  //url to fetch data from (JSON format)

  topHeadlines = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0c4a8391e21446b0907e017f1380a514';
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0c4a8391e21446b0907e017f1380a514';
  biznews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c4a8391e21446b0907e017f1380a514'

  headlinesTop(): Observable<any> {
    return this.http.get(this.topHeadlines);
  }

  fetchTech(): Observable<any> {
    return this.http.get(this.techNews);
  }

  bizNews(): Observable<any> {
    return this.http.get(this.biznews);
  }

}
