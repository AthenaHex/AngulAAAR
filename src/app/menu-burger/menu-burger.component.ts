import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.css']
})
export class MenuBurgerComponent {

  isActive:boolean = false;

  openning():void{
    console.log("open");
    this.isActive=true;
  };

  closing():void{
    console.log("close");
    this.isActive=false;
  };

  toggle():void{
    console.log("toggle");
    this.isActive = !this.isActive;
  }


}
