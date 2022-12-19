import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent
 {
name:string='Ankit Lashkari';
n:number = 0;
  arr:number[] = [];
  
  toggle(){
    this.n++;
    this.arr.push(this.n);
  }
  bgcolor(){
    if(this.n>=5){
      return 'blue';
    }
    else{
      return 'none';
    }
  }
  fontclass(){
    if(this.n>=5){
      return 'color';
    }
    else{
      return 'none';
    }
  }


}
