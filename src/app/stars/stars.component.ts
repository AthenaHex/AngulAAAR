import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges{
  @Input() rating:number = 0;
  cropWidth:number = 0; //80px = 100% des étoiles

  ngOnChanges():void{
    this.cropWidth = this.rating * 80/100;
  }

  onStarsClick():void{
    this.ratingClicked.emit(`Rating : ${this.rating} was clicked`);
  };
  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
  

}
