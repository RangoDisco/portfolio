import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../shared/common/email.service';
import { FormInputs } from '../../shared/common/form-inputs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formInputs: FormInputs = new FormInputs();
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.emailService.sendMail(this.formInputs);
  }
}
