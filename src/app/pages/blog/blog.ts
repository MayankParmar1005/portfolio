import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Calendar,
  User,
  Clock,
  ChevronRight,
  Search,
  Tag
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent {
  readonly Calendar = Calendar;
  readonly User = User;
  readonly Clock = Clock;
  readonly ChevronRight = ChevronRight;
  readonly Search = Search;
  readonly Tag = Tag;

  posts = [
    {
      title: 'Why every business needs a website in 2026',
      excerpt: 'In today\'s digital-first world, a website is your primary business identity. Learn why it\'s essential for growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      date: 'March 10, 2026',
      author: 'Admin',
      readTime: '5 min read',
      category: 'Business'
    },
    {
      title: 'Website vs Social Media: Which is better for business?',
      excerpt: 'While social media is great for engagement, a website offers complete control over your brand and customer data.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      date: 'March 5, 2026',
      author: 'Admin',
      readTime: '7 min read',
      category: 'Marketing'
    },
    {
      title: 'How a website helps local businesses grow faster',
      excerpt: 'Local SEO and a professional website can significantly increase foot traffic to your physical store or salon.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      date: 'February 28, 2026',
      author: 'Admin',
      readTime: '6 min read',
      category: 'Growth'
    },
    {
      title: 'Cost of building a website in India: A complete guide',
      excerpt: 'Understanding the investment required for a professional website, from domain costs to development fees.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
      date: 'February 20, 2026',
      author: 'Admin',
      readTime: '8 min read',
      category: 'Guides'
    }
  ];

  categories = ['All', 'Business', 'Marketing', 'Growth', 'Guides', 'Design'];
}
