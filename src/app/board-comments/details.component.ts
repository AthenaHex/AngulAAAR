import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

    // _______ Défini l'id du restaurant dont on veut les détails
    this._idRestaurant = this.route.snapshot.params['idRestaurant']; 
  };


  // Getter et Setter __________________________________
  // ___ Liste de commentaires du restaurant
  get commentsFiltered():Comment[]{
    return this.getCommentsByRestaurant(this._idRestaurant);
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



}
