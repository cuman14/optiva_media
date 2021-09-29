import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core/modules/card/models/card.model';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-graphics-detail',
  templateUrl: './graphics-detail.component.html',
  styleUrls: ['./graphics-detail.component.scss']
})
export class GraphicsDetailComponent implements OnInit {
  public id!:  string | null;
  public card!: Card;

  constructor(
    private readonly _cardService: CardService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this._cardService.getGraphicsDetail(this.id).subscribe( res => {
        this.card = res;
      })
    }   
  }

}
