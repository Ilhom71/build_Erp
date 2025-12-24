import { Component } from '@angular/core';
import { HrInterface } from '../model/hr';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  arr: HrInterface[] = [
    {
      id: 1,
      title: 'Can I use only one KPI application or I have to use all?',
      text: `  Yes, KPI applications are cross-functional and work best together, however, if you only
        require one application you are able to use the application which you desire. Our sales team
        is there to help and advise you regarding which applications would work best for you and
        your business.`,
      link: '',
      img: '',
      active: false,
    },
     {
      id: 2,
      title: 'Can I use only one KPI application or I have to use all?',
      text: `  Yes, KPI applications are cross-functional and work best together, however, if you only
        require one application you are able to use the application which you desire. Our sales team
        is there to help and advise you regarding which applications would work best for you and
        your business.`,
      link: '',
      img: '',
      active: false,
    }, {
      id: 3,
      title: 'Can I use only one KPI application or I have to use all?',
      text: `  Yes, KPI applications are cross-functional and work best together, however, if you only
        require one application you are able to use the application which you desire. Our sales team
        is there to help and advise you regarding which applications would work best for you and
        your business.`,
      link: '',
      img: '',
      active: false,
    }, {
      id: 4,
      title: 'Can I use only one KPI application or I have to use all?',
      text: `  Yes, KPI applications are cross-functional and work best together, however, if you only
        require one application you are able to use the application which you desire. Our sales team
        is there to help and advise you regarding which applications would work best for you and
        your business.`,
      link: '',
      img: '',
      active: false,
    },
     {
      id: 5,
      title: 'Can I use only one KPI application or I have to use all?',
      text: `  Yes, KPI applications are cross-functional and work best together, however, if you only
        require one application you are able to use the application which you desire. Our sales team
        is there to help and advise you regarding which applications would work best for you and
        your business.`,
      link: '',
      img: '',
      active: false,
    },
  ];


  OnOpen(id:number):void{
    this.arr.map(val=>{
      if(val.id==id){
        val.active=!val.active
      }

      return val
    })
  }


}
