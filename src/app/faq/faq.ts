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
    title: 'Faqat bitta KPI ilovasidan foydalanish mumkinmi yoki hammasini ishlatish kerak?',
    text: `Ha, KPI ilovalari bir-biri bilan uyg‘un ishlaydi va eng yaxshi natija shu bilan olinadi. 
      Ammo siz faqat bitta ilovadan foydalanmoqchi bo‘lsangiz, o‘zingizga kerakli ilovani tanlashingiz mumkin. 
      Savdo jamoamiz sizga qaysi ilovalar biznesingiz uchun eng mos ekanligini maslahat berishga tayyor.`,
    link: '',
    img: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600',
    active: false,
    iconName: "none"
  },
  {
    id: 2,
    title: 'Ilovalarning bir-biri bilan ishlashini qanday ta’minlash mumkin?',
    text: `Barcha KPI ilovalari o‘zaro integratsiyalashgan, shuning uchun ular birgalikda ishlaganda biznes jarayonlaringiz samaraliroq bo‘ladi. 
      Bizning jamoamiz sizga integratsiya va sozlash bo‘yicha yordam beradi.`,
    link: '',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    active: false,
    iconName: "none"
  },
  {
    id: 3,
    title: 'KPI ilovasini sinovdan o‘tkazish mumkinmi?',
    text: `Ha, siz ilovani bepul sinov muddati davomida ishlatishingiz mumkin. Bu sizga barcha funksiyalarni sinab ko‘rish va biznesingiz uchun mosligini baholash imkonini beradi.`,
    link: '',
    img: 'https://images.pexels.com/photos/3760063/pexels-photo-3760063.jpeg?auto=compress&cs=tinysrgb&w=600',
    active: false,
    iconName: "none"
  },
  {
    id: 4,
    title: 'Mijozlarni qo‘llab-quvvatlash qanday ishlaydi?',
    text: `Platforma orqali siz mijozlaringiz bilan oson muloqot qilishingiz mumkin. Savollar, shikoyatlar va maslahatlar uchun jamoamiz doim yordam beradi.`,
    link: '',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    active: false,
    iconName: "none"
  },
  {
    id: 5,
    title: 'Buyurtmalar va savdo jarayonlarini boshqarish imkoniyati bormi?',
    text: `Ha, barcha buyurtmalar, savdo va hisob-kitoblarni bitta platformada kuzatib borishingiz mumkin. Bu biznesingizni samarali boshqarishga yordam beradi.`,
    link: '',
    img: 'https://images.pexels.com/photos/4016847/pexels-photo-4016847.jpeg?auto=compress&cs=tinysrgb&w=600',
    active: false,
    iconName: "none"
  },
];


  OnOpen(id: number): void {
    this.arr.map((val) => {
      if (val.id == id) {
        val.active = !val.active;
      }

      return val;
    });
  }
}
