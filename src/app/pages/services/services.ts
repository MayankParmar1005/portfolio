import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Monitor,
  ShoppingCart,
  RefreshCw,
  Settings,
  CheckCircle,
  Zap,
  Shield,
  Search,
  Layout
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  readonly Monitor = Monitor;
  readonly ShoppingCart = ShoppingCart;
  readonly RefreshCw = RefreshCw;
  readonly Settings = Settings;
  readonly CheckCircle = CheckCircle;
  readonly Zap = Zap;
  readonly Shield = Shield;
  readonly Search = Search;
  readonly Layout = Layout;

  services = [
    {
      title: 'Business Website',
      description: 'Custom websites for local businesses like salons, restaurants, and professional services.',
      icon: Monitor,
      features: [
        'Responsive Design',
        'Contact Form Integration',
        'Google Maps Setup',
        'Basic SEO Optimization'
      ],
      benefits: 'Establish professional credibility and attract local customers effectively.'
    },
    {
      title: 'E-commerce Website',
      description: 'Robust online stores with product management, secure payments, and inventory tracking.',
      icon: ShoppingCart,
      features: [
        'Product Catalog',
        'Secure Payment Gateway',
        'User Accounts',
        'Order Management'
      ],
      benefits: 'Sell your products globally 24/7 with a seamless shopping experience.'
    },
    {
      title: 'Website Redesign',
      description: 'Transformation of outdated websites into modern, high-performance digital assets.',
      icon: RefreshCw,
      features: [
        'Modern UI/UX',
        'Speed Optimization',
        'Conversion Focused',
        'Mobile Optimization'
      ],
      benefits: 'Rejuvenate your brand and improve user engagement and sales.'
    },
    {
      title: 'Website Maintenance',
      description: 'Continuous support, security updates, and performance monitoring for your peace of mind.',
      icon: Settings,
      features: [
        'Security Patches',
        'Regular Backups',
        'Content Updates',
        'Performance Audits'
      ],
      benefits: 'Ensure your website stays secure, up-to-date, and running at peak performance.'
    }
  ];

  additionalFeatures = [
    { title: 'Lightning Fast', icon: Zap, text: 'Optimized for speed to keep bounce rates low.' },
    { title: 'Secure & Safe', icon: Shield, text: 'Best practices for security and data protection.' },
    { title: 'SEO Optimized', icon: Search, text: 'Built with search engines in mind.' },
    { title: 'User Centric', icon: Layout, text: 'Intuitive designs for best user experience.' }
  ];
}
