import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  // hide=true;
  email=new FormControl('',[
    Validators.required, Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(4),]);
  
    conformpassword = new FormControl('',[
      Validators.required,Validators.minLength(4),
    ]);

  constructor(private serviceObject : FundoonoteserviceService,private router : Router) { }


  ngOnInit() {
  }

  onforgot()
  {
    const data = {
      email:this.email.value,
      password : this.password.value,
      conformpassword : this.conformpassword.value,
    };
  this.serviceObject.getForgotValue(data).subscribe((result:any) => {
    console.log(result);
    console.log(result['statusMsg']);
   // const temp = JSON.stringify(result);
   // const results = JSON.parse(temp);
   // console.log(results.message, ':', results);
   if(result['statusMsg']=="true")
   {
    alert("password created");
   this.router.navigate(['/login']);
   }
   else
   {
   this.router.navigate(['/forgotpassword']);
   alert("email already exists");
   }
 });
//   },err => {  this.router.navigate(['/login']);
//   console.log(err);
//   alert("invalid details"); 
//  });


 this.serviceObject.getForgotValue(data);
}
}
