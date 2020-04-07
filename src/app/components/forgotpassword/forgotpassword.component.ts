import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
import {Router} from '@angular/router'
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  email=new FormControl('',[
    Validators.required, Validators.email,
  ]);
  constructor(private router : Router,private userservice : UserService,private snackbar : MatSnackBar) { }


  ngOnInit() {
  }

//   onforgot()
//   {
//     const data = {
//       email:this.email.value,
//     };
//   this.serviceObject.postForgotValue(data).subscribe((result:any) => {
//     console.log(result);
//     console.log(result['statusMsg']);
//    // const temp = JSON.stringify(result);
//    // const results = JSON.parse(temp);
//    // console.log(results.message, ':', results);
//    if(result['statusMsg']=="true")
//    {
//     alert("link sent to your mail");
//    this.router.navigate(['/login']);
//    }
//    else
//    {
//    this.router.navigate(['/forgotpassword']);
//    alert("invalid email");
//    }
//  });
// //   },err => {  this.router.navigate(['/login']);
// //   console.log(err);
// //   alert("invalid details"); 
// //  });


//  this.serviceObject.postForgotValue(data);
// }
  onforgot()
  {
    const data={
      email : this.email.value
    };
    this.userservice.forgotpassword(data).subscribe((result : any)=>{
      console.log(result);
      if(result['statusMsg']=="false")
      {
        this.snackbar.open("invalid email","cancel",{ duration: 5000});
      }
    });

}
}
