import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admincompanylist',
  templateUrl: './admincompanylist.page.html',
  styleUrls: ['./admincompanylist.page.scss'],
})
export class AdmincompanylistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  list() {
    this.router.navigate(['/bucketlist']);
  }
  arrow() {
    this.router.navigate(['/adminlogin']);
  }
  list1() {
    this.router.navigate(['/adddata']);
  }
}
