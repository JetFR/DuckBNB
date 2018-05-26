import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
  lang: 'fr',
  theme: 'ios'
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}

// export class AppComponent {
//   // Place the code below into your own component or use the full template
//
//   select: string = "AF";
//   filter: string = "AF";
//   myselect: string = "AF";
//   external: string = "AF";
//
//   myData = [{
//     value: 'AF',
//     group: 'A',
//     text: 'Afghanistan'
//   },
//     {
//       value: 'AL',
//       group: 'A',
//       text: 'Albania'
//     },
//     {
//       value: 'DZ',
//       group: 'A',
//       text: 'Algeria'
//     },
//     {
//       value: 'AD',
//       group: 'A',
//       text: 'Andorra'
//     },
//     {
//       value: 'AO',
//       group: 'A',
//       text: 'Angola'
//     },
//     {
//       value: 'AR',
//       group: 'A',
//       text: 'Argentina'
//     },
//     {
//       value: 'AM',
//       group: 'A',
//       text: 'Armenia'
//     },
//     {
//       value: 'AW',
//       group: 'A',
//       text: 'Aruba'
//     },
//     {
//       value: 'AU',
//       group: 'A',
//       text: 'Australia'
//     },
//     {
//       value: 'AT',
//       group: 'A',
//       text: 'Austria'
//     },
//     {
//       value: 'AZ',
//       group: 'A',
//       text: 'Azerbaijan'
//     },
//     {
//       value: 'BH',
//       group: 'B',
//       text: 'Bahrain'
//     },
//     {
//       value: 'BD',
//       group: 'B',
//       text: 'Bangladesh'
//     },
//     {
//       value: 'BY',
//       group: 'B',
//       text: 'Belarus'
//     },
//     {
//       value: 'BE',
//       group: 'B',
//       text: 'Belgium'
//     },
//     {
//       value: 'BZ',
//       group: 'B',
//       text: 'Belize'
//     },
//     {
//       value: 'BJ',
//       group: 'B',
//       text: 'Benin'
//     },
//     {
//       value: 'BT',
//       group: 'B',
//       text: 'Bhutan'
//     },
//     {
//       value: 'BO',
//       group: 'B',
//       text: 'Bolivia'
//     },
//     {
//       value: 'BA',
//       group: 'B',
//       text: 'Bosnia And Herzegovina'
//     },
//     {
//       value: 'BW',
//       group: 'B',
//       text: 'Botswana'
//     },
//     {
//       value: 'BR',
//       group: 'B',
//       text: 'Brazil'
//     },
//     {
//       value: 'IO',
//       group: 'B',
//       text: 'British Indian Ocean Territory'
//     },
//     {
//       value: 'BN',
//       group: 'B',
//       text: 'Brunei Darussalam'
//     },
//     {
//       value: 'BG',
//       group: 'B',
//       text: 'Bulgaria'
//     },
//     {
//       value: 'BF',
//       group: 'B',
//       text: 'Burkina Faso'
//     },
//     {
//       value: 'BI',
//       group: 'B',
//       text: 'Burundi'
//     },
//     // Showing partial data. Download full source.
//   ];
//
//   selectSettings: MbscSelectOptions = {
//     theme: 'ios',
//     lang: 'fr',
//     display: 'bottom',
//     group: true,
//     maxWidth: [40, 260],
//     width: [40, 235]
//   };
//   filterSettings: MbscSelectOptions = {
//     theme: 'ios',
//     lang: 'fr',
//     display: 'bottom',
//     filter: true,
//     group: {
//       groupWheel: false,
//       header: false
//     }
//   };
//   myselectSettings: MbscSelectOptions = {
//     theme: 'ios',
//     lang: 'fr',
//     display: 'bottom',
//     group: true,
//     maxWidth: [40, 260],
//     width: [40, 235],
//     inputClass: 'demo-non-form'
//   };
//
//   externalSettings: MbscSelectOptions = {
//     theme: 'ios',
//     lang: 'fr',
//     display: 'bottom',
//     group: true,
//     maxWidth: [40, 260],
//     width: [40, 235],
//     inputClass: 'demo-non-form',
//     showOnTap: false
//   };
// }
