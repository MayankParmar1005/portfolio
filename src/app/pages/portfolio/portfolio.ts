import { Component } from '@angular/core';
import {
  LucideAngularModule,
  ExternalLink,
  Github,
  Code2,
  Filter
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly Code2 = Code2;
  readonly Filter = Filter;

  activeFilter = 'All';
  filters = ['All', 'Business', 'E-commerce', 'UI/UX'];

  selectedProject: any = null;
  isModalOpen = false;

  projects = [
    {
      title: 'The spice royale',
      category: 'Business',
      description: 'Elegant restaurant web app for The Royal Spice featuring menu browsing, table reservations, and a rich dining experience.',
      image: 'assets/images/restaurantapp.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    },

    {
      title: 'The gentleman\'s cut',
      category: 'Business',
      description: 'Modern barber shop website with online booking, service listing, and a premium grooming experience.',
      image: 'assets/images/barbershop.png',
      technologies: ['React Native', 'TypeScript', 'Stripe'],
    },

    {
      title: 'Dent Care',
      category: 'Business',
      description: 'Professional dental care platform featuring smile treatments, doctor profiles, appointment scheduling, and trusted oral healthcare solutions.',
      image: 'assets/images/dent-care.png',
      technologies: ['React Native', 'TypeScript', 'Stripe'],
    },
    
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  openModal(project: any) {
    console.log('Clicked:', project); // 👈 check this
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
