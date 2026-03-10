import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Monitor,
  ShoppingCart,
  RefreshCw,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from 'lucide-angular';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  private initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const revealElements = this.el.nativeElement.querySelectorAll('.reveal-hidden');
    revealElements.forEach((el: Element) => observer.observe(el));
  }

  readonly Monitor = Monitor;
  readonly ShoppingCart = ShoppingCart;
  readonly RefreshCw = RefreshCw;
  readonly Settings = Settings;
  readonly CheckCircle = CheckCircle;
  readonly ArrowRight = ArrowRight;
  readonly Star = Star;
  readonly Quote = Quote;

  services = [
    { title: 'Business Website', description: 'Websites for local businesses like salons, restaurants, shops.', icon: Monitor },
    { title: 'E-commerce Website', description: 'Online store with product management and payment integration.', icon: ShoppingCart },
    { title: 'Website Redesign', description: 'Improve old websites with modern design and better performance.', icon: RefreshCw },
    { title: 'Website Maintenance', description: 'Security updates, backups, and content updates.', icon: Settings },
  ];

  portfolio = [
    { title: 'Restaurant Website', description: 'Modern dining experience showcasing menu and ambiance.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600' },
    { title: 'Barber Shop Website', description: 'Premium grooming service booking and gallery.', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600' },
    { title: 'Saree Store Website', description: 'Elegant ethnic wear collection with seamless e-commerce.', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Business Portfolio', description: 'Professional corporate landing page for startups.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' },
  ];

  testimonials = [
    { name: 'John Doe', role: 'Business Owner', review: 'DevPortfolio transformed our online presence. Highly professional!', photo: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Sarah Khan', role: 'Boutique Owner', review: 'The e-commerce store is user-friendly and helped our sales grow.', photo: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Rajesh Gupta', role: 'Restaurant Manager', review: 'Excellent design and constant support. Truly top-notch.', photo: 'https://i.pravatar.cc/150?u=3' },
  ];

  processSteps = [
    { number: 1, title: 'Requirement Discussion', description: 'Discussing goals and defining project scope.' },
    { number: 2, title: 'UI Design', description: 'Creating mockups and professional layout designs.' },
    { number: 3, title: 'Website Development', description: 'Coding the design into a fast and functional website.' },
    { number: 4, title: 'Client Review', description: 'Sharing the draft for feedback and improvements.' },
    { number: 5, title: 'Website Launch', description: 'Going live and optimizing for search engines.' },
  ];
}
