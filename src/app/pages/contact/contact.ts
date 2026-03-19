import { Component, inject } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';

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
  isSubmitting = false;
  showSuccess = false;

  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     this.submitted = true;
  //     console.log('Form Submitted', this.contactForm.value);
  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       this.submitted = false;
  //       this.contactForm.reset();
  //     }, 3000);
  //   }
  // }

  onSubmit() {
    alert('button clicked')
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      alert('valid')
      this.isSubmitting = true;

      console.log(this.contactForm.value);
      
      this.http.post('http://13.233.116.31:3000/send-email', this.contactForm.value)
        .subscribe({
          next: (res) => {
            this.showSuccess = true;
            this.isSubmitting = false;
            this.contactForm.reset();
          },
          error: (err) => {
            console.error('Submission Error:', err);
            this.isSubmitting = false;
            alert('Failed to send message. Please try again later.');
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.showSuccess = false;
    this.contactForm.reset();
  }
}
