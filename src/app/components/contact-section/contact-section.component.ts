import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [TitleSectionComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  get fields(): FormArray {
    return this.contactForm.get('fields') as FormArray;
  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}
