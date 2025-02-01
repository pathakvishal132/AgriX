import { Component } from '@angular/core';
import { PARTNERS } from '../../../data/partner/partner.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { Partner } from '../../../model/partner/partner.model';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss']
})
export class PartnersPageComponent {

  PARTNERS: Partner[] = PARTNERS;
  URLS = URLS;

  partnersTitle = [
    { text: `:@@partnersPage.partnersTitle.1:Business Partners`, level: 1 },
    { text: `:@@partnersPage.partnersTitle.2:Create and run your online business with Open Template Hub and our partners.` }
  ];

  constructor() {
    // Intentionally Blank
  }
}

