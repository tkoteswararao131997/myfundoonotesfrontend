import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required, Validators.email, ]);
  password = new FormControl('', [
      Validators.required, Validators.minLength(4), ]);
      isSubmit=false;

  constructor(private serviceObject:FundoonoteserviceService, private router: Router) { }


  ngOnInit() {
  }

  onLogin() {
    const data = {
      password: this.password.value,
      email: this.email.value,
    };
    console.log(data);
    this.serviceObject.getLoginValue(data).subscribe((result) => {
      const temp = JSON.stringify(result);
      const results = JSON.parse(temp);
      console.log(results.message, ':', results);
      this.router.navigate(['/register']) 
    });
    this.serviceObject.getLoginValue(data);
}

}
