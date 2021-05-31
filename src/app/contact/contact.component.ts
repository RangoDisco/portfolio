import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormInputs } from '../common/form-inputs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formInputs: FormInputs = new FormInputs();
  constructor() {}

  ngOnInit(): void {
    console.log(this.formInputs);
  }
  onSubmit(form: NgForm) {
    console.log(this.formInputs);
    form.resetForm();
  }
}
