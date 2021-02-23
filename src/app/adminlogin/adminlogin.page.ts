import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';


import 'rxjs/add/operator/map';




@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

logindata: any = {};
  constructor(private router: Router,
  	private navctrl: NavController,
  	private storage: Storage,
  	public toastCtrl: ToastController,
    private http: HttpClient) {
this.logindata.Username = "";
this.logindata.Password = "";

     }


  ngOnInit() {

  }
login(){

  if(this.logindata.Username != '' && this.logindata.Password !=''){


  console.log("user:", this.logindata.username);
  console.log("pass:",this.logindata.password);

  let url:string= "http://localhost/IoTdev/login.php";
  let dataPost = JSON.stringify({
    user:this.logindata.username,
    pass:this.logindata.password,

  });
  this.router.navigate(['/admincompanylist']);
this.http.post(url,dataPost)
.subscribe(data =>{
  console.log(data);
});

  }else{
    console.log("Enter Password");
  }
}

     }
