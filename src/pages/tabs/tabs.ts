import { Component } from '@angular/core';

import { HomePage } from '../home/home';
<<<<<<< HEAD
import { ProfilePage } from '../profile/profile'
=======
import { ProfilePage } from '../profile/profile';
>>>>>>> da1d42214d862da4da860fb7c5fd344712f26b40

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;

  constructor() {

  }
}
