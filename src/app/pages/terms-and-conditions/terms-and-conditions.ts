import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.css',
})
export class TermsAndConditionsComponent {
  sections = [
    {
      title: '1. Website Purpose',
      body: 'This website is a personal portfolio created to showcase professional experience, skills, projects, and services related to web development and technology.',
    },
    {
      title: '2. Intellectual Property',
      body: 'All content on this website, including text, graphics, design, code samples, and project information, is the property of Mayank Parmar unless otherwise stated. Unauthorized copying, reproduction, or redistribution of content is prohibited.',
    },
    {
      title: '3. Project Information',
      body: 'Project examples and work displayed on this website are provided for demonstration and portfolio purposes only. Some projects may include confidential or client-related information that has been limited or modified for privacy reasons.',
    },
    {
      title: '4. External Links',
      body: 'This website may include links to third-party websites or services. We are not responsible for the content, availability, or policies of external websites.',
    },
    {
      title: '5. No Guarantees',
      body: 'While efforts are made to keep the website information accurate and updated, no guarantees are made regarding completeness, reliability, or accuracy. Visitors use the website at their own discretion.',
    },
    {
      title: '6. Limitation of Liability',
      body: 'Mayank Parmar shall not be held responsible for any direct or indirect damages resulting from the use of this website.',
    },
    {
      title: '7. Changes to Terms',
      body: 'These Terms & Conditions may be updated at any time without prior notice. Continued use of the website after updates means acceptance of the revised terms.',
    },
    {
      title: '8. Contact',
      body: 'For any questions regarding these terms, please contact through the website contact section.',
    },
  ];
}
