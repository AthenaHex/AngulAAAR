import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  pageTitle:string = "Détails restaurant";

  constructor(){};

  ngOnInit():void{

  };
}
