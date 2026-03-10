import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Code
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Github = Github;
  readonly Twitter = Twitter;
  readonly Linkedin = Linkedin;
  readonly Instagram = Instagram;
  readonly Code = Code;

  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/portfolio', label: 'View Portfolio' },
    { path: '/pricing', label: 'Pricing Plans' },
    { path: '/blog', label: 'Latest Blog' },
    { path: '/contact', label: 'Contact Us' },
  ];

  services = [
    { path: '/services', label: 'Business Website' },
    { path: '/services', label: 'E-commerce Store' },
    { path: '/services', label: 'Website Redesign' },
    { path: '/services', label: 'Maintenance' },
  ];
}
