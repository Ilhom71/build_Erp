import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-middelware-carusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './middelware-carusel.html',
  styleUrls: ['./middelware-carusel.css'],
})
export class MiddelwareCarusel implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  
  cards = [
    'Card 1','Card 2','Card 3','Card 4','Card 5',
    'Card 6','Card 7','Card 8','Card 9','Card 10',
    'Card 11','Card 12'
  ];

  allCards: string[] = [];
  animationId: number = 0;
  speed = 1; // px per frame
  position = 0;
  isPaused = false;

  constructor() {
    // Cheksiz loop uchun kartalarni ko'paytiramiz
    this.allCards = [...this.cards, ...this.cards, ...this.cards, ...this.cards];
  }

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    const animate = () => {
      if (!this.isPaused) {
        this.position -= this.speed;
        
        // Agar birinchi to'plamning oxiriga yetgan bo'lsak
        if (Math.abs(this.position) >= this.cards.length * 166) { // 150px + 16px margin
          this.position = 0;
        }
        
        if (this.carouselTrack) {
          this.carouselTrack.nativeElement.style.transform = `translateX(${this.position}px)`;
        }
      }
      
      this.animationId = requestAnimationFrame(animate.bind(this));
    };
    
    this.animationId = requestAnimationFrame(animate.bind(this));
  }

  ngOnInit() {}

  // Sichqoncha ustiga olganda to'xtatish
  onMouseEnter() {
    this.isPaused = true;
  }

  // Sichqoncha chiqqanda davom ettirish
  onMouseLeave() {
    this.isPaused = false;
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}