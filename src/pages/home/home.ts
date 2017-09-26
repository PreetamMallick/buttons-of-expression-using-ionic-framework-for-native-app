import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	expression: string;

  	constructor(public navCtrl: NavController) {

  	}

  	addExpression(val) {
  		console.log(val._elementRef.nativeElement.id);
  		this.expression = val._elementRef.nativeElement.id;
  	}

}
