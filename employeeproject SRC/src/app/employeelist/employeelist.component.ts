import { Component,OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../model/employee';
import {Router} from '@angular/router';
import { CommonserviceService } from '../sheared/commonservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})


export class EmployeelistComponent  implements OnInit{


  constructor(private s:CommonserviceService,public router:Router){
  
  }
 


  emp!:Employee[];
  ee!:EmployeeComponent;
  
  ngOnInit(): void {
    this.s.EmployeeGetData().subscribe(list =>{

      this.emp=list
    })
  }

  deleteDataById(id:any)
  {
  this.s.DeleteEmployeeData(id).subscribe( data =>{
  console.log(data);
  window.location.reload();
  })
  }
  getemployeebyid(id:any){
    this.s.GetEmployeeById(id).subscribe(data =>{
      console.log(data);
      this.s.getsinglemp(data);
      window.location.reload();
    }
    )
  }
  reload() {

    let currentUrl = this.router.url;
  
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
        this.router.onSameUrlNavigation = 'reload';
  
        this.router.navigate([currentUrl]);
  
    }

}

// selector: 'app-createemployee',
//   templateUrl: './createemployee.component.html',
//   styleUrls: ['./createemployee.component.css']
