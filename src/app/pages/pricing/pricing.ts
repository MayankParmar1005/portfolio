import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Check,
  X,
  Zap,
  TrendingUp,
  ShoppingBag
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class PricingComponent {
  readonly Check = Check;
  readonly X = X;
  readonly Zap = Zap;
  readonly TrendingUp = TrendingUp;
  readonly ShoppingBag = ShoppingBag;

  pricingPlans = [
    {
      name: 'Basic Website',
      price: '₹15,000',
      description: 'Best for small businesses just starting out.',
      icon: Zap,
      features: [
        'Single Page Design',
        'Mobile Responsive',
        'Contact Form',
        'Basic SEO',
        'Social Media Links'
      ],
      notIncluded: [
        'E-commerce Features',
        'Custom Animations',
        'Priority Support'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Business Website',
      price: '₹35,000',
      description: 'Best for growing businesses needing more impact.',
      icon: TrendingUp,
      features: [
        'Up to 5 Pages',
        'Professional UI/UX',
        'Custom Lead Forms',
        'Advanced SEO',
        'Google Analytics Setup',
        'Content Management'
      ],
      notIncluded: [
        'Payment Integration',
        'Inventory Management'
      ],
      buttonText: 'Choose Business',
      popular: true
    },
    {
      name: 'E-commerce Website',
      price: '₹75,000+',
      description: 'Full online store solution for your products.',
      icon: ShoppingBag,
      features: [
        'Unlimited Products',
        'Secure Payments',
        'Order Tracking',
        'Inventory Management',
        'Discount Coupons',
        'Premium Support',
        'Performance Training'
      ],
      notIncluded: [],
      buttonText: 'Build Store',
      popular: false
    }
  ];
}
