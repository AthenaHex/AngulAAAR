import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[CommentService],
})
export class DetailsComponent {

  // Variables __________________________________
  private _comments:Comment[] = [];
  private _commentsFiltered:Comment[] = [];
  errorMessage:string="";
  private _idRestaurant:number = 0;
  restaurant:Restaurant={    id: 0,    name: '',    city: '',    street: '',    email: '',    rate: 0  };
  sortedBy:string="";
  sortDirection:boolean=true; //true = 

  // ___ Le constructeur défini la dépendance et le paramètre de route
  constructor(private commentsService:CommentService, private route: ActivatedRoute){

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

    // _______ Défini l'id du restaurant dont on veut les détails
    this._idRestaurant = this.route.snapshot.params['idRestaurant']; 
  };


  // Getter et Setter __________________________________
  // ___ Liste de commentaires du restaurant
  get commentsFiltered():Comment[]{
    this._commentsFiltered = this.getCommentsByRestaurant(this._idRestaurant);
    this.sortBy(this.sortedBy);
    return this._commentsFiltered;
  };

  getCommentsByRestaurant(idRestaurant:number):Comment[]{
    this._commentsFiltered = this._comments; // On commence ac all commentaires

    // Filtre à mettre ici
    this._commentsFiltered = this._commentsFiltered.filter((comm:Comment) =>
      comm.commentRestaurantId == idRestaurant );
    // ____________

    console.log(JSON.stringify(this._commentsFiltered));
    return this._commentsFiltered;
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
          this._commentsFiltered = this._commentsFiltered.sort((a,b)=>a.postDate.localeCompare(b.postDate));
        }else{
          this._commentsFiltered = this._commentsFiltered.sort((a,b)=>b.postDate.localeCompare(a.postDate));
        }; }; break;
      case "rate":{
        if(this.sortDirection){
          this._commentsFiltered = this._commentsFiltered.sort((a,b)=>a.commentRate.toString().localeCompare(b.commentRate.toString(), undefined, { numeric: true, sensitivity: 'base' }));
        }else{
          this._commentsFiltered = this._commentsFiltered.sort((a,b)=>b.commentRate.toString().localeCompare(a.commentRate.toString(), undefined, { numeric: true, sensitivity: 'base' }));
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
