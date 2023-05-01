import { Component } from '@angular/core';
import { Comment } from '../comment';


@Component({
  selector: 'app-board-comments',
  templateUrl: './board-comments.component.html',
  styleUrls: ['./board-comments.component.css']
})


export class BoardCommentsComponent {

  listFilter:string="";

  comments: Comment[] = [
    {
      "commentId":1,
      "user": "Bob",
      "userComment": "Jamais je n'avais vu un restaurant comme celui là...",
      "userRate":1.5,
      "oldnessOfPostInDays":102
    },
    {
      "commentId":2,
      "user": "Léa",
      "userComment": "Ils m'ont aidé à larguer mon ex.",
      "userRate":5,
      "oldnessOfPostInDays":52
    },
    {
      "commentId":3,
      "user": "Léo",
      "userComment": "Je me suis fait larguer dans ce restaurant. Néanmoins délicieux, quoique un peu salé.",
      "userRate":4.0,
      "oldnessOfPostInDays":53
    },
    {
      "commentId":4,
      "user": "Jacque-André de la Camomille",
      "userComment": "Bonjour, nul. -Jacque-André de la Camomille",
      "userRate":0.5,
      "oldnessOfPostInDays":42
    },
    {
      "commentId":5,
      "user": "Sophie",
      "userComment": "Il y avait des poils dans mon plat !",
      "userRate":1.2,
      "oldnessOfPostInDays":10
    },
    {
      "commentId":6,
      "user": "Amélie",
      "userComment": "Je compense la note de Sophie par ce que c'est moi qui ai mit les poils dans son plat.",
      "userRate":3.5,
      "oldnessOfPostInDays":10
    },
    {
      "commentId":7,
      "user": "Alexandre",
      "userComment": "Un peu chère.",
      "userRate":3.5,
      "oldnessOfPostInDays":8
    },
  ]

}


