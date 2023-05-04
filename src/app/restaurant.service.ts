import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs"; // Reactive extends (pour gerer les choses de manière asynchrone)

@Injectable({
        providedIn:'root',
    })
export class RestaurantService{


  // Mock http data
  constructor(private http:HttpClient){};
  private restaurantUrl = 'api/restaurants/restaurants.json'; // Lien vers les mocks data

  // Méthode de Getter
  getRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.restaurantUrl).pipe(
      tap(data => console.log('Observable<Restaurant[]> : ', "log disabled")), // Pour print les données : JSON.stringify(data)
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
      errorMessage = `Les serveur a renvoyé : ${err.status}, le message d'erreur est : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(()=>errorMessage);
  };
  
  
}