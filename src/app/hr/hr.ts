import { Component, signal,computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HrInterface } from '../model/hr';
@Component({
  selector: 'app-hr',
  imports: [MatIconModule],
  templateUrl: './hr.html',
  styleUrl: './hr.css',
})
export class Hr {
 

  arr = signal<HrInterface[]>([
  {
    id: 1,
    title: 'Ombor hisobi',
    text: 'Har bir material kirimi va chiqimi real vaqtda nazorat qilinadi',
    link: '#warehouse',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-1.png',
    active: true,
    iconName: 'warehouse', // Material icon nomi
  },
  {
    id: 2,
    title: 'Ishchilar oyligi',
    text: 'Ishchilar oyligi avtomatik hisoblanadi, avans va bonuslar bilan',
    link: '#salary',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-2.png',
    active: false,
    iconName: 'paid',
  },
  {
    id: 3,
    title: 'Moliya nazorati',
    text: 'Barcha xarajatlar va daromadlar real vaqtda ko‘rinadi',
    link: '#finance',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-3.png',
    active: false,
    iconName: 'account_balance_wallet',
  },
  {
    id: 4,
    title: 'Loyihalar boshqaruvi',
    text: 'Har bir qurilish loyihasi alohida nazorat qilinadi',
    link: '#projects',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-4.png',
    active: false,
    iconName: 'engineering',
  },
  {
    id: 5,
    title: 'Hisobotlar',
    text: '1 klikda PDF yoki Excel formatda hisobot olish mumkin',
    link: '#reports',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-5.png',
    active: false,
    iconName: 'insert_drive_file',
  },
  {
    id: 6,
    title: 'Rollar va ruxsatlar',
    text: 'Direktor, buxgalter va omborchi uchun alohida ruxsatlar',
    link: '#roles',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-6.png',
    active: false,
    iconName: 'security',
  },
  {
    id: 7,
    title: 'Mobil moslashuv',
    text: 'ERP telefon va planshetda ham qulay ishlaydi',
    link: '#mobile',
    img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/service-images/ser-7.png',
    active: false,
    iconName: 'smartphone',
  },
]);


  img = computed(() => this.arr().find((item) => item.active)?.img ?? '');

  setActive(id: number) {
    this.arr.update((items) => items.map((item) => ({ ...item, active: item.id === id })));
  }
}
