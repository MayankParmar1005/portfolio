import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Code,
  Layers,
  Smartphone,
  Globe,
  Cpu,
  Cloud,
  CheckCircle,
  Award,
  Users
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly Code = Code;
  readonly Layers = Layers;
  readonly Smartphone = Smartphone;
  readonly Globe = Globe;
  readonly Cpu = Cpu;
  readonly Cloud = Cloud;
  readonly CheckCircle = CheckCircle;
  readonly Award = Award;
  readonly Users = Users;

  skills = [
    { name: 'Angular', icon: Code, level: 95 },
    { name: 'Laravel', icon: Layers, level: 90 },
    { name: 'HTML / CSS', icon: Globe, level: 100 },
    { name: 'JavaScript', icon: Cpu, level: 95 },
    { name: 'REST API integration', icon: Smartphone, level: 90 },
    { name: 'AWS deployment', icon: Cloud, level: 85 },
  ];

  stats = [
    { label: 'Years Experience', value: '13+', icon: Award },
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Happy Clients', value: '120+', icon: Users },
  ];
}
