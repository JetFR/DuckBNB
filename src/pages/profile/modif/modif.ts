import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile';
/**
 * Generated class for the ModifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif',
  templateUrl: 'modif.html',
})
export class ModifPage {

    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() { console.log('ionViewDidLoad ModifPage');}
    
}
