import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name=new FormControl('',[
    Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*'),
  ]);
  email=new FormControl('',[
    Validators.required, Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(4),]);
  
    mobile = new FormControl('',[
      Validators.required,Validators.pattern('^[0][1-9]{1}[0-9]{9}$'),
    ]);
  constructor(private serviceObject : FundoonoteserviceService,private router : Router) { }

  ngOnInit() {
  }

  onRegister()
  {
    const data = {
      name : this.name.value,
      email: this.email.value,
      mobileNumber:this.mobile.value,
      password: this.password.value,
    };
  this.serviceObject.getRegisterValue(data).subscribe((result:any) => {
    console.log(result);
   console.log(result['statusMsg']);
   // const temp = JSON.stringify(result);
   // const results = JSON.parse(temp);
   // console.log(results.message, ':', results);
   if(result['statusMsg']=="true")
   {
    alert("registration success");
   this.router.navigate(['/login']);
   }
   else
   {
   this.router.navigate(['/register']);
   alert("invalid details");
   }
 });
//   },err => {  this.router.navigate(['/login']);
//   console.log(err);
//   alert("invalid details"); 
//  });


 this.serviceObject.getRegisterValue(data);
}
}
