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
   
  }
  
  

  emp1!:Employee[];
  
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";

  editClicked:Boolean=false;

  ngOnInit(): void 
  {
    this.s.EmployeeGetData().subscribe(list =>{

      this.emp1=list
    })
      this.employeeform=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      mob:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      addr:['',[Validators.required]]
      })
      this.s.empls.subscribe(data=>{console.log(data);

        this.editClicked=true;
  
        this.s.getEmployee(data).subscribe({
  
          next:(res: any)=>{
  
            this.employeeform=this.fb.group({
  
              id:res.id,
              name:res.name,
              addr:res.addr,
              mob:res.mob
  
            })
  
          }
  
        });
  
      })
  }

  onSubmit()
  {
    if(this.editClicked==true)

    {

      this.s.updateemployee(this.employeeform.value.id,this.employeeform.value).subscribe();

      window.location.reload();

    }
    if(this.employeeform.valid)
    {
    this.s.Employeesave(this.employeeform.value).subscribe();
    window.location.reload();
    }
 }
  reset()
  {
    //this.employeeform.value.Object.assign({},null);
    
   //this.s.emp=Object.assign({},null);
   window.location.reload();

  }
  deleteDataById(id:any)
  {
  this.s.DeleteEmployeeData(id).subscribe( data =>{
  console.log(data);
  window.location.reload();
  })
  }
  edit(empls:any)
  {
    this.s.setEmployee(empls);
  }
}
