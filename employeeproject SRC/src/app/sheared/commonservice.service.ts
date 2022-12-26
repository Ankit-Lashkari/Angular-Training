import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  emp?:Employee;

  constructor(public http:HttpClient)
  {
    
  }
  url:string="http://localhost:3000";

  getsinglemp(emp:Employee){
    this.emp=emp;
  }

  Employeesave(emp:Employee)
  {
      return this.http.post<Employee>(this.url+"/getAllData",emp);
  }

  Employeeedit(emp:Employee){
    return this.http.post<Employee>(this.url+"/getAllData",emp);
  }

  GetEmployeeById(id:number)
  {
      return this.http.get<Employee>(this.url+"/getAllData/"+id);
  }

  EmployeeGetData():Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.url+"/getAllData");
  }

  DeleteEmployeeData(sid:number)
 {
     return this.http.delete(this.url+"/getAllData/"+sid);
 }

}
