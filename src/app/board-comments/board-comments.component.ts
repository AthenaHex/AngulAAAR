import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Observable, map } from 'rxjs';



@Component({
  selector: 'app-board-comments',
  templateUrl: './board-comments.component.html',
  styleUrls: ['./board-comments.component.css'],
  providers:[RestaurantService]
})


export class BoardCommentsComponent {

  // Variables __________________________________
  private _listFilter:string="";
  private _restaurants:Restaurant[] = [];
  private _restaurantsFiltered:Restaurant[] = [];
  errorMessage:string="";

  // ___ Le constructeur défini la dépendance
  constructor(private restaurantsService:RestaurantService){
  };

  // OnInit ________________________________________
  ngOnInit():void{
    // ___ Défini la variable restaurants_pas_filtrés comme le contenu du service (mock comme provenant d'en ligne)
    this.restaurantsService.getRestaurants().subscribe({
      next: restaurants =>                 // if ok
        //console.log(" this._restaurantsFiltered:Restaurants[], type:"+ typeof this.restaurantsFiltered+", valeur:"+this.restaurantsFiltered);
        this._restaurants = restaurants,     // <----------------------------- _restaurants -> OBSERVABLE ???
      error:                               // if not ok
        err => this.errorMessage = err        // Message d'erreur
    });
  };


  // Getter et Setter __________________________________
  
  get restaurantsFiltered():Restaurant[]{
    return this.performFilter(this._listFilter);
  };

  get listFilter():string{
    return this._listFilter;
  };

  set restaurantsFiltered(value:Restaurant[]){
    this._restaurantsFiltered = this.performFilter(this._listFilter);
  };

  set listFilter(value:string){
    this._listFilter = value;
  }

  // Méthodes _____________________________________________________
  // ___ Déclenche un évenement ailleurs lors du click sur les étoiles
  onRatingClicked($event: string) {
      console.log($event);
    };
  // ___ Défini les restaurants après filtre
  performFilter(filterBy:string):Restaurant[] {
    filterBy = filterBy.toLocaleLowerCase(); // le filtre en minuscule
    this._restaurantsFiltered = this._restaurants.filter((rest:Restaurant)=> // Filtre si ...
     rest.name.toLocaleLowerCase().includes(filterBy)); // ... le nom en minuscule == filtre en minuscule
    return this._restaurantsFiltered;
  };

}


