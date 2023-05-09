import { Injectable } from '@angular/core';
import { Comment } from "./comment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs"; // Reactive extends (pour gerer les choses de manière asynchrone)

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // Mock http data
  constructor(private http:HttpClient){};
  private commentsUrl = 'api/restaurants/comments.json'; // Lien vers les mocks data

  // Méthode de Getter
  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentsUrl).pipe(
      tap(data => console.log('Observable<Comment[]> : ', "log disabled")), // Pour print les données : JSON.stringify(data)
      catchError(this.handleError)
    );
  };
  
  private handleError(err:HttpErrorResponse){
    let errorMessage=""; // message d'erreur
    if(err.error instanceof ErrorEvent){
      // erreur d'accès au network
      errorMessage = `Une erreur a eu lieu : ${err.error.message}`;
    }else{
      // erreur dans les données reçues
      errorMessage = `Le serveur a renvoyé : ${err.status}, le message d'erreur est : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(()=>errorMessage);
  };

}
