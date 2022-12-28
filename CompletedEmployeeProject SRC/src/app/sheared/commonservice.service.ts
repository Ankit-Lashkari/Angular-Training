import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  emp?:Employee;
  empls=new Subject();

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
updateemployee(id:any, e:Employee):Observable<Employee[]>{
  const url=`${this.url}/getAllData/${id}`;

     return this.http.put<Employee[]>(url,e);
}
getEmployee(sid:any):Observable<Employee>

 {  const url=`${this.url}/getAllData/${sid}`;

     return this.http.get<Employee>(url);

 }

setEmployee(empls:any)

 {

   this.empls.next(empls);

 }
}
