import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee } from '../model/employee';
import { CommonserviceService } from '../sheared/commonservice.service';


@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit  {
  
  employeeform!:FormGroup;
  emp!:Employee;
  constructor(private fb:FormBuilder,public s:CommonserviceService){
   
    if(s.emp!=null){
     this.emp=s.emp;
    }
  }
  
 

  //emp!:Employee[];
  
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";

 

  ngOnInit(): void 
  {
      this.employeeform=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      mob:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      addr:['',[Validators.required]]
      })
  }

  onSubmit()
  {
    if(this.employeeform.valid)
    {
    this.s.Employeesave(this.employeeform.value).subscribe();
    window.location.reload();
    }
 }
  reset()
  {
    //this.employeeform.value.Object.assign({},null);
    
   this.s.emp=Object.assign({},null);

  }
 

}
