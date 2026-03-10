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

  projects = [
    {
      title: 'Restaurant Website',
      category: 'Business',
      description: 'Modern dining experience showcasing menu and ambiance.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      technologies: ['Angular', 'CSS', 'Lucide Icons'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Barber Shop Website',
      category: 'Business',
      description: 'Premium grooming service booking and gallery.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
      technologies: ['Angular', 'Responsive Design'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Saree E-commerce Website',
      category: 'E-commerce',
      description: 'Elegant ethnic wear collection with seamless e-commerce.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Angular', 'Node.js', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Tool Website',
      category: 'UI/UX',
      description: 'Modern SaaS landing page for artificial intelligence tools.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      technologies: ['Angular', 'Tailwind', 'Framer Motion'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Corporate Business Website',
      category: 'Business',
      description: 'Professional corporate landing page for startups.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Angular', 'REST API'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Landing Page Design',
      category: 'UI/UX',
      description: 'High-converting landing page for marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800',
      technologies: ['HTML5', 'SASS', 'Animations'],
      demoLink: '#',
      githubLink: '#'
    }
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
}
