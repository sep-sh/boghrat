import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../types/article.type';

@Injectable()
export class ArticlesApiService {

  constructor(private httpClient: HttpClient) { }


  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('codeChallenge/angular')
  }

}
