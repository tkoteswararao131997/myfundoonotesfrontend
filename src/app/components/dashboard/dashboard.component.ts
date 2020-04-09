import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, reduce } from 'rxjs/operators';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
 export class DashboardComponent { 
  grid: boolean = true;
  constructor(private router : Router) {}
  onClickView() {
    return this.grid === true ? (this.grid = false) : (this.grid = true);
  }
}
