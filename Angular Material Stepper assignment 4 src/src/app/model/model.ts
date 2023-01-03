export class EmployeeForm{
    id?:number; 
    name?:string;
    username?:string;
     email?:string;
     password?:string;
     gender?:string;
     dob?:string;
     mob?:string;
     skills?:string;
    }
    export class LoginForm{
        username?:string;
        password?:string;
    
    }
    export class BasicInfo{
        id?:number;
        fullname?:string;
        email?:string;
        fathersname?:string;
        mothersname?:string;
        gender?:string;
        dob?:string;
        mob?:string;
        
    }
    export class BankDetails{
        id?:number;
        fullname?:string;
        accountNo?:string;
        bankName?:string;
        ifsc?:string;
        mobilebanking?:string;
        netbanking?:string
    
    }
    export class Address{
        id?:number;
        presentaddr?:string;
        permanentaddr?:string;
       
    }