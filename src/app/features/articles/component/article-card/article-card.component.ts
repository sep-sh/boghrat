import { Component, input } from '@angular/core';
import { Article } from '../../types/article.type';
import { MatCardModule } from '@angular/material/card';
import { PersianDatePipe } from '../../../../shared/pipes/persian-date.pipe';
import { DiscountPipe } from '../../../../shared/pipes/discount.pipe';

@Component({
  selector: 'app-article-card',
  imports: [MatCardModule,PersianDatePipe,DiscountPipe],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  article = input.required<Article>();

}
