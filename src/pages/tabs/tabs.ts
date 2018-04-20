import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MiningPage } from '../mining/mining';
import { WalletPage } from '../wallet/wallet';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MiningPage;
  tab3Root = WalletPage;
  tab4Root = ProfilePage;
  tab5Root = SettingsPage;
  constructor() {
  
  }
}
