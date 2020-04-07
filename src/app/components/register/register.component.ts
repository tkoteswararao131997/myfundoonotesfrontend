import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
// import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;
  name=new FormControl('',[
    Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*'),
  ]);
  email=new FormControl('',[
    Validators.required, Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(4),]);
  
    mobile = new FormControl('',[
      Validators.required,Validators.pattern('^[1-9]{1}[0-9]{9}$'),
    ]);
  constructor(private router : Router,private userservice : UserService,private snackbar : MatSnackBar) { }

  ngOnInit() {
  }
    onRegister()
    {
      const data={
        name : this.name.value,
       email: this.email.value,
       mobileNumber:this.mobile.value,
      password: this.password.value,
      };
      this.userservice.registeruser(data).subscribe((result:any)=>{
        console.log(result);
        if(result['statusMsg']=="true")
        this.router.navigate(["/login"]);
        else
        {
        this.snackbar.open("registration failed","cancel",{ duration: 5000});
        this.router.navigate(["/register"]);
        }
      });
    }

}
