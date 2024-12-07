import { Injectable, signal, WritableSignal } from '@angular/core';
import { Article } from '../types/article.type';
import { ArticlesApiService } from './articles-api.service';

@Injectable()
export class ArticlesService {
  public articles: WritableSignal<Article[]> = signal<Article[]>([]);

  constructor(private apiService: ArticlesApiService) { }


  public initialize() {

    this.setArticles()
  }



  private setArticles(): void {
    this.apiService.getArticles().subscribe((articles: Article[]) => {
      console.log('articles', articles)
      this.articles.set(articles)


    })
  }
}
