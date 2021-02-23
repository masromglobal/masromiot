import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.page.html',
  styleUrls: ['./adddata.page.scss'],
})
export class AdddataPage  {

  companydata: any = {};
  constructor(private router: Router, public navCtrl: NavController, public http: HttpClient, public toast: ToastController) { }



arrow() {
  this.router.navigate(['/admincompanylist'])
}
ionViewDidLoad() {
  console.log('Adddata Page');
  }
  insert(){
  this.companydata.action = "insert";
  this.http.post("http://localhost/IoTdev/fetch_datas.php", this.companydata).subscribe(data=>{
  console.log(data);
  let result = JSON.parse(data["_body"]);
  if(result.status == "success"){
  this.showToast("Inserted successfully");
  }
  else{
  this.showToast("Something went wrong");
  }
  }, err=>{
  console.log(err);
  })
  }

  async showToast(message){
  let toast = this.toast.create({
  message:message,
  duration: 2000
  });
  (await toast).present();
  }

}

