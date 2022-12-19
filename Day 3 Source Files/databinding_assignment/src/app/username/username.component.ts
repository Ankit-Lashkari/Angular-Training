import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent
{
  name:string='';

  constructor()
  {
   
  }

  clear()
  {
    this.name='';
  }

}
