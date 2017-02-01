import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LineChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartPage {
	public lineChartType:string = 'line';
	public lineChartData:Array<any> = [{data: [18, 48, 27, 39, 10, 27, 40], label: 'Series'}];
	public lineChartLabels:Array<any> = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];  


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineChartPage');
  }

}
