import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EmployeeForm } from './model/employeeform';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'registerform';

  empform!:FormGroup;
  constructor(private fb:FormBuilder,private s:ServiceService){}

  

  ngOnInit(): void 
  {

    this.empform = this.fb.group({
    fullName:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
    email:['', [ Validators.required, Validators.email]],
    password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    gender:['', [Validators.required]],
    dob:[''],
    mob:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
    skills:[''],

    })
    
  }

  onSubmit()
  {
    this.s.employeeSave(this.empform.value).subscribe();
    window.location.reload();
  }

}
