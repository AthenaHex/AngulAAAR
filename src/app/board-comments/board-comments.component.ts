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
  private _nameCheckBool:boolean=true;
  private _cityCheckBool:boolean=true;
  private _streetCheckBool:boolean=false;

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
  // ___ Liste des restaurants après filtre
  get restaurantsFiltered():Restaurant[]{
    return this.performFilter(this._listFilter,this.nameCheckBool,this.cityCheckBool,this.streetCheckBool);;
  };
  //___________ setter redondant car le getter fait setter :
  set restaurantsFiltered(value:Restaurant[]){
    this._restaurantsFiltered = this.performFilter(this._listFilter,this.nameCheckBool,this.cityCheckBool,this.streetCheckBool);
  };
  // ___ string du filtre
  get listFilter():string{
    return this._listFilter;
  };
  set listFilter(value:string){
    this._listFilter = value;
  };
  // ___ informations sur l'étendu du filtre
  // ______ Le nom
  get nameCheckBool():boolean{
    return this._nameCheckBool;
  };
  set nameCheckBool(value:boolean){
    this._nameCheckBool=value;
  }
  // ______ La ville
  get cityCheckBool():boolean{
    return this._cityCheckBool;
  };
  set cityCheckBool(value:boolean){
    this._cityCheckBool=value;
  }
  // ______ La rue
  get streetCheckBool():boolean{
    return this._streetCheckBool;
  };
  set streetCheckBool(value:boolean){
    this._streetCheckBool=value;
  }


  // Méthodes _____________________________________________________
  // ___ Déclenche un évenement ailleurs lors du click sur les étoiles
  onRatingClicked($event: string) {
      console.log($event);
    };
  // ___ Défini les restaurants après filtre
  performFilter(filterBy:string,nameCheckBool:boolean,cityCheckBool:boolean,streetCheckBool:boolean):Restaurant[] {
    this._restaurantsFiltered = this._restaurants;
    if(!nameCheckBool&&!cityCheckBool&&!streetCheckBool){
      
    }else{
      filterBy = filterBy.toLocaleLowerCase(); // le filtre en minuscule
      if(nameCheckBool==true){
        this._restaurantsFiltered = this._restaurantsFiltered.filter((rest:Restaurant)=> // Filtre si ...
        rest.name.toLocaleLowerCase().includes(filterBy)); // ... le nom en minuscule contient le filtre en minuscule
      };
      if(cityCheckBool==true){
        this._restaurantsFiltered = this._restaurantsFiltered.filter((rest:Restaurant)=> // Filtre si ...
        rest.city.toLocaleLowerCase().includes(filterBy)); // ...
      };
      if(streetCheckBool==true){
        this._restaurantsFiltered = this._restaurantsFiltered.filter((rest:Restaurant)=> // Filtre si ...
        rest.street.toLocaleLowerCase().includes(filterBy)); // ... 
      };
    }

    

    return this._restaurantsFiltered;
  };

}


