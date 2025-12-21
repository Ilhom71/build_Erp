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
  // img=signal("")
  // arr: HrInterface[] = [
  //   {
  //     id: 1,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  //   {
  //     id: 4,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  //   {
  //     id: 5,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  //   {
  //     id: 6,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  //   {
  //     id: 7,
  //     title: 'HR',
  //     text: 'Employee management system',
  //     link: '#',
  //     img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
  //     active: false,
  //   },
  // ];

  // Onchange(id: number): void {
  //   this.arr.map((val) => {
  //     if (val.id == id) {
  //       val.active = true;
  //       this.img.set(val.img)
  //     } else {
  //       val.active = false;
  //     }

  //     return val;
  //   });
  // }

  // constructor(){
  //   this.arr.forEach(val=>{
  //     if(val.active){
  //       this.img.set(val.img)
  //     }
  //   })
  // }

  arr = signal<HrInterface[]>([
    {
      id: 1,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: true,
    },
    {
      id: 2,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },
      {
      id: 3,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },  {
      id: 4,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },  {
      id: 5,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },  {
      id: 6,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },  {
      id: 7,
      title: 'HR',
      text: 'Employee management system',
      link: '#',
      img: 'https://www.kpi.com/wp-content/themes/thesaas-child/files//images/home-img/service-images/ser-1.png',
      active: false,
    },
  ]);

  img = computed(() => this.arr().find((item) => item.active)?.img ?? '');

  setActive(id: number) {
    this.arr.update((items) => items.map((item) => ({ ...item, active: item.id === id })));
  }
}
