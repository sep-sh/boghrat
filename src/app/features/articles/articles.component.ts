import { Component, OnInit, Signal } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { ArticlesApiService } from './services/articles-api.service';
import { ArticleCardComponent } from "./component/article-card/article-card.component";
import { Article } from './types/article.type';

@Component({
  selector: 'app-articles',
  imports: [ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  providers: [ArticlesService, ArticlesApiService]
})
export class ArticlesComponent implements OnInit {
  readonly articles: Signal<Article[]>;

  constructor(private service: ArticlesService) {
    this.articles = this.service.articles

  }


  ngOnInit(): void {
    this.service.initialize()
  }
}
