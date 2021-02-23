import { ApiService } from './../../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { IonSearchbar, NavController } from '@ionic/angular';
import { debounce } from 'rxjs/operators';


@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.page.html',
  styleUrls: ['./bucketlist.page.scss'],
})
export class BucketlistPage implements OnInit  {
  @ViewChild('search',{ static: false}) search:IonSearchbar;

  public Location: any =[];

pepperoni:boolean=true
  constructor(private router: Router, public api: ApiService, public navCtrl: NavController) {


   }

  doRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(()=>{
      event.target.complete();

    },2000);
  }
  ngOnInit() {
    this.api.getcompanydata().subscribe(data =>{
      console.log(data);
      this.Location= data;
    })

  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.search.setFocus();

    })
  }


  _ionChange(event){
    console.log(event.detail.value)
    let val = event.detail.value.toLowerCase();
      if ( val && val.trim() != '') {
      this.Location.filter((companydata: any) => {
       console.log(this.Location);
       console.log(val);
       let ram = companydata.CompanyName;
       debugger;
       console.log(ram.toLowerCase().toString().indexof("test") > -1);



      })
    }
  }



  add() {
     this.navCtrl.navigateForward('/AdddataPage');
  }
arrow(){
  this.router.navigate(['/admincompanylist']);
}
toggle(){
  console.log(this.pepperoni);
  this.pepperoni=!(this.pepperoni)
}

}
