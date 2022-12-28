import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Employee } from '../model/employee';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonserviceService} from '../sheared/commonservice.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
// export class EmployeeComponent {

// }

export class EmployeeComponent implements OnInit {

  constructor(public s:CommonserviceService, private router:Router) { 
    router.navigateByUrl
  }
    
  e?:Employee[];



 employeeform!:FormGroup;

 
 // namepattern!:"^[a-zA-Z ]{2,20}$";

  ngOnInit(): void 
  {
      
  }
    submitdata(e:Employee)
    {
      if(e.id!=null)
      {
        return this.s.Employeesave(e).subscribe();
        window.location.reload();
      }
      else
      {
        return this.s.Employeeedit(e).subscribe();  
      }
    }

  reset()
  {
    this.s.emp=Object.assign({},null);
  }

  reload() 
  {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  }
}