import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    selected : any = '';
    transactions : any = '';
    items : any = [];
    constructor(public navCtrl: NavController) {
        this.items = [
      {'title':'Bitcoin', 'currency':'btc', 'price':'5000€'},
      {'title':'Ethereum', 'currency':'eth', 'price':'500€'},
      {'title':'Ripple', 'currency':'xrp', 'price':'0.4€'}
    ];
        this.transactions = [
      {
        'sender': 'charles',
        'recipient': 'maxime',
        'amount': 100,
          'type': 1,
      },
      {
        'sender': 'charles',
        'recipient': 'raphael',
        'amount': 100,
          'type': 1,
      },
      {
        'sender': 'charles',
        'recipient': 'doreen',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'louis-joseph',
        'amount': 100,
          'type': 1,
      },
      {
        'sender': 'charles',
        'recipient': 'elise',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'germain',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'anthony',
        'amount': 100,
          'type': 1,
      },
      {
        'sender': 'charles',
        'recipient': 'pol',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'vincent',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'nicolas',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'kevin',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'willy',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'elodie',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'adrien',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'romain',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'quentin',
        'amount': 100,
          'type': 0,
      },
      {
        'sender': 'charles',
        'recipient': 'jean-etienne',
        'amount': 100,
          'type': 1,
      },
      {
        'sender': 'charles',
        'recipient': 'gael',
        'amount': 100,
          'type': 0,
      }
    ];
  }

  itemSelected(item) {
    this.selected =item;
  }
  
  allTransactions(transaction) {
      this.selected =transaction;
  }
    
}
