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
  constructor(private serviceObject : FundoonoteserviceService,private router : Router) { }


  ngOnInit() {
  }

  onforgot()
  {
    const data = {
      email:this.email.value,
    };
  this.serviceObject.getForgotValue(data).subscribe((result:any) => {
    console.log(result);
    console.log(result['statusMsg']);
   // const temp = JSON.stringify(result);
   // const results = JSON.parse(temp);
   // console.log(results.message, ':', results);
   if(result['statusMsg']=="true")
   {
    alert("link sent to your mail");
   this.router.navigate(['www.gmail.com']);
   }
   else
   {
   this.router.navigate(['/forgotpassword']);
   alert("invalid email");
   }
 });
//   },err => {  this.router.navigate(['/login']);
//   console.log(err);
//   alert("invalid details"); 
//  });


 this.serviceObject.getForgotValue(data);
}
}
