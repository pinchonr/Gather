import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user='';
  password='';


  constructor(public navCtrl: NavController) {

  }

	login(){
	console.log("user:"+this.user);
	console.log("password:"+this.password);
		//if(this.user!=''||this.password!=''){
			this.navCtrl.push(TabsPage);
		//}
		
	}

}
