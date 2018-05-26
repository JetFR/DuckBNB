import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home';
/**
 * Generated class for the ModifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'residence.html',
})
export class ResidencePage {

    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() { console.log('ionViewDidLoad ResidencePage');}
    
}
