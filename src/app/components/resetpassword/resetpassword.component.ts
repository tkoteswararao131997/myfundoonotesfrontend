import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FundoonoteserviceService } from 'src/app/services/fundoonoteservice.service';
import { MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
    newpassword = new FormControl('', [
      Validators.required, Validators.minLength(4),]);

      conformpassword = new FormControl('', [
        Validators.required, Validators.minLength(4),]);

  constructor(private serviceObject : FundoonoteserviceService,private router : ActivatedRoute,private matSnackBar: MatSnackBar,) { }

  ngOnInit() {
  }

  onReset()
  {
    const data = {
      newpassword : this.newpassword.value,
      // conformpassword : this.conformpassword.value,
      token : this.router.snapshot.paramMap.get('token'),
    };
  this.serviceObject.getResetValue(data).subscribe((result:any) => {
    console.log(result);
   console.log(result['statusMsg']);
   // const temp = JSON.stringify(result);
   // const results = JSON.parse(temp);
   // console.log(results.message, ':', results);
   if(result['statusMsg']=="true")
   {
    this.matSnackBar.open(
      "your password updated",
      "cancel",
      { duration: 5000 }
    );
  //  this.router.navigate(['/login']);
   }
   else
   {
  //  this.router.navigate(['/resetpassword']);
   alert("invalid details");
   }
 });
//   },err => {  this.router.navigate(['/login']);
//   console.log(err);
//   alert("invalid details"); 
//  });


 this.serviceObject.getResetValue(data);
}
}