import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
// import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
import { MatSnackBar} from '@angular/material';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
    newpassword = new FormControl('', [
      Validators.required, Validators.minLength(4),]);
      token : string;
      constructor(private userservice : UserService,private router:Router,private snackbar : MatSnackBar,private activateroute : ActivatedRoute){}
  ngOnInit() {
  }
  onReset()
  {
    const data={
      newpassword : this.newpassword.value,
      token : this.activateroute.snapshot.paramMap.get('token'),
    };
    console.log(this.token);
    console.log(this.newpassword),
    this.userservice.updatepassword(data).subscribe((result:any) => {
      console.log(result);
      if(result['statusMsg']=="true")
        this.router.navigate(["/login"]);
      else
      {
        this.snackbar.open("updation failed","cancel",{ duration: 5000});
        this.router.navigate(["/updatepassword"]);
      }
    });

}
}