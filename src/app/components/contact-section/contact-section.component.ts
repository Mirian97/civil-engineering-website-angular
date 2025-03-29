import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { toast } from '../../../helpers/toast';
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get fields(): FormArray {
    return this.contactForm.get('fields') as FormArray;
  }

  sendEmail(e: Event) {
    e.preventDefault();
    const { emailPublicKey, emailServiceId, emailTemplateId } = environment;
    const form = e.target as HTMLFormElement;
    if (!form) {
      console.log('Erro: Nenhum formulário encontrado no evento.');
      return;
    }
    emailjs
      .sendForm(emailServiceId, emailTemplateId, form, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          toast({
            icon: 'success',
            title: 'Contato enviado!',
            text: 'Entrarei em contato em breve',
          });
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          toast({
            icon: 'error',
            title: 'Oops',
            text: 'Algo inesperado ocorreu tente novamente',
          });
        }
      );
  }
}
