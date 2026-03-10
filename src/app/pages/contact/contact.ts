import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Send,
  MessageSquare
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Github = Github;
  readonly Twitter = Twitter;
  readonly Linkedin = Linkedin;
  readonly Send = Send;
  readonly MessageSquare = MessageSquare;

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      console.log('Form Submitted', this.contactForm.value);
      // Reset form after 3 seconds
      setTimeout(() => {
        this.submitted = false;
        this.contactForm.reset();
      }, 3000);
    }
  }
}
