import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicyComponent {
  sections = [
    {
      title: '1. Information We Collect',
      body: 'This website may collect basic information such as name, email address, phone number, messages submitted through the contact form, browser and device information, and website usage analytics. This information is collected only when voluntarily submitted by visitors or through analytics tools.',
    },
    {
      title: '2. How We Use Your Information',
      body: 'The collected information may be used for responding to inquiries or messages, improving website performance and user experience, communication regarding projects or services, and website analytics and traffic monitoring. Your information will never be sold or shared with third parties for marketing purposes.',
    },
    {
      title: '3. Cookies and Analytics',
      body: 'This website may use cookies or third-party analytics services such as Google Analytics to understand website traffic and visitor behavior. Cookies help improve the browsing experience and website functionality. You can disable cookies through your browser settings if preferred.',
    },
    {
      title: '4. Third-Party Links',
      body: 'This website may contain links to third-party websites such as GitHub, LinkedIn, or external project links. We are not responsible for the privacy practices or content of those external websites.',
    },
    {
      title: '5. Data Security',
      body: 'Reasonable measures are taken to protect submitted information from unauthorized access or misuse. However, no internet-based service can guarantee complete security.',
    },
    {
      title: '6. Changes to This Policy',
      body: 'This Privacy Policy may be updated from time to time without prior notice. Changes will be posted on this page with an updated revision date.',
    },
    {
      title: '7. Contact Information',
      body: 'If you have any questions regarding this Privacy Policy, you may contact Mayank Parmar through the website at https://mayanksweb.online.',
    },
  ];
}
