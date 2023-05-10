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
  sortedBy:string="error service";
  sortDirection:boolean=true; //true = 
  private _restaurants:Restaurant[] = [];
  private _restaurantsFiltered:Restaurant[] = [];
  errorMessage:string="";
  private _nameCheckBool:boolean=true;
  private _cityCheckBool:boolean=true;
  private _streetCheckBool:boolean=false;

  // ___ Le constructeur défini la dépendance
  constructor(private restaurantsService:RestaurantService){
  };


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
    this._restaurantsFiltered = this.performFilter(this._listFilter,this.nameCheckBool,this.cityCheckBool,this.streetCheckBool);
    this.sortBy(this.sortedBy);
    return this._restaurantsFiltered;
  };
  //___________ setter redondant car le getter fait setter :
  set restaurantsFiltered(value:Restaurant[]){
    // this._restaurantsFiltered = this.performFilter(this._listFilter,this.nameCheckBool,this.cityCheckBool,this.streetCheckBool);
    // this.sortBy(this.sortedBy);
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
  // ____ Défini par quoi trier la liste filtrée
  setSortedBy(str:string):void{
    this.sortedBy = str;
    this.sortDirection = !this.sortDirection;
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
  // ___________ Réinitalise les filtres
  reinitialisation():void{
    this._nameCheckBool = false;
    this._cityCheckBool = false;
    this._streetCheckBool = false;
  };

  // ___________ Trie la liste de restaurant en fonction de l'entré envoyée depuis le front
  sortBy(sortedBy:string){
    this.sortedBy = sortedBy;
    console.log(this.sortDirection);
    switch(sortedBy){
      case "name":{
        if(this.sortDirection){
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>a.name.localeCompare(b.name));
        }else{
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>b.name.localeCompare(a.name));
        }; }; break;
      case "city":{
        if(this.sortDirection){
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>a.city.localeCompare(b.city));
        }else{
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>b.city.localeCompare(a.city));
        }; }; break;
      case "street":{
        if(this.sortDirection){
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>a.street.localeCompare(b.street));
        }else{
          this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>b.street.localeCompare(a.street));
        }; }; break;
      // case "rate":{
      //   this._restaurantsFiltered = this._restaurantsFiltered.sort((a,b)=>a.rate.localeCompare(b.rate));
      // }
    };
  };

  // _______ Défini la classe css des flèches de trie pour les faire tourner en fonction de leur utilisation
  // ___________ class de la flèche de nom
  arrowDirectionName():string{
  if(this.sortedBy==="name"){
    this.sortDirection = !this.sortDirection;
    if(this.sortDirection){
      return "arrow-down";
    }else{
      return "arrow-up";
    };
  }else{
    return "arrow-none";
    };
  }
  // ___________ class de la flèche de ville
  arrowDirectionCity():string{
    if(this.sortedBy==="city"){
      this.sortDirection = !this.sortDirection;
      if(this.sortDirection){
        return "arrow-down";
      }else{
        return "arrow-up";
      };
    }else{
      return "arrow-none";
      };
    }
  // ___________ class de la flèche de rue
    arrowDirectionStreet():string{
      if(this.sortedBy==="street"){
        this.sortDirection = !this.sortDirection;
        if(this.sortDirection){
          return "arrow-down";
        }else{
          return "arrow-up";
        };
      }else{
        return "arrow-none";
        };
      }







}