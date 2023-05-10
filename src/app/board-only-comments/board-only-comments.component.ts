import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-board-only-comments',
  templateUrl: './board-only-comments.component.html',
  styleUrls: ['./board-only-comments.component.css'],
  providers:[CommentService],
})
export class BoardOnlyCommentsComponent {

  // Variables __________________________________
  private _comments:Comment[] = [];
  errorMessage:string="error service";
  private _idRestaurant:number = 0;
  private _restaurants:Restaurant[] = [];
  private _restaurant:Restaurant | undefined;
  sortedBy:string="";
  sortDirection:boolean=true; //true = 

  // ___ Le constructeur défini la dépendance et le paramètre de route
  constructor(private commentsService:CommentService, private restaurantsService:RestaurantService){

  };

  // OnInit ________________________________________
  ngOnInit():void{
    // ___ Défini la variable comments_pas_filtrés comme le contenu du service (mock comme provenant d'en ligne)
    this.commentsService.getComments().subscribe({
      next: comments =>                 // if ok
        //console.log(" this._restaurantsFiltered:Restaurants[], type:"+ typeof this.restaurantsFiltered+", valeur:"+this.restaurantsFiltered);
        this._comments = comments,     // <----------------------------- _restaurants -> OBSERVABLE ???
      error:                               // if not ok
        err => this.errorMessage = err        // Message d'erreur
    });
    // ___ Récupère les infos du restaurant cliqué
    // ___ Défini la variable restaurants_pas_filtrés comme le contenu du service (mock comme provenant d'en ligne)
    this.restaurantsService.getRestaurants().subscribe({
      next: restaurants =>                 // if ok
        //console.log(" this._restaurantsFiltered:Restaurants[], type:"+ typeof this.restaurantsFiltered+", valeur:"+this.restaurantsFiltered);
        this._restaurants = restaurants, 
      error:                               // if not ok
        err => this.errorMessage = err        // Message d'erreur
    });
  };


  // Getter et Setter __________________________________
  // ___ Liste de commentaires du restaurant
  get commentsFiltered():Comment[]{
    this.sortBy(this.sortedBy);
    return this._comments;
  };

  get restaurant():any{
    this._restaurant = this._restaurants.find(rest => rest.id == this._idRestaurant);;
    return this._restaurant;
  }

  // ____ Défini par quoi trier la liste filtrée
  setSortedBy(str:string):void{
    this.sortedBy = str;
    this.sortDirection = !this.sortDirection;
  }

  sortBy(sortedBy:string){
    this.sortedBy = sortedBy;
    console.log(this.sortDirection);
    switch(sortedBy){
      case "date":{
        if(this.sortDirection){
          this._comments = this._comments.sort((a,b)=>a.postDate.localeCompare(b.postDate));
        }else{
          this._comments = this._comments.sort((a,b)=>b.postDate.localeCompare(a.postDate));
        }; }; break;
      case "rate":{
        if(this.sortDirection){
          this._comments = this._comments.sort((a,b)=>a.commentRate.toString().localeCompare(b.commentRate.toString(), undefined, { numeric: true, sensitivity: 'base' }));
        }else{
          this._comments = this._comments.sort((a,b)=>b.commentRate.toString().localeCompare(a.commentRate.toString(), undefined, { numeric: true, sensitivity: 'base' }));
        }; }; break;
    };
  }

  // _______ Défini la classe css des flèches de trie pour les faire tourner en fonction de leur utilisation
  // ___________ class de la flèche de la date
  arrowDirectionDate():string{
  if(this.sortedBy==="date"){
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
  // ___________ class de la flèche de la note
  arrowDirectionRate():string{
    if(this.sortedBy==="rate"){
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
