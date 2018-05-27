import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home';
/**
 * Generated class for the Logement2 page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logement2',
  templateUrl: 'logement2.html',
})
export class Logement2Page {
    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() { console.log('ionViewDidLoad Logement2Page');}
    
}
