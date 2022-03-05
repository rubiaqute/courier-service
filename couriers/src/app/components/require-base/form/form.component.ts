import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), this.validateName]),
      phone: new FormControl('', [Validators.required, this.validatePhone]),
      email: new FormControl('', [Validators.email, Validators.required]),
      weight: new FormControl('1'),
      receiver: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.validateName
      ]),
      receiverAddresse: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      receiverPhone: new FormControl('', [Validators.required, this.validatePhone]),
      sender: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.validateName
      ]),
      senderAddresse: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      senderPhone: new FormControl('', [Validators.required, this.validatePhone]),
      payment: new FormControl('client'),
    });
  }
  submit() {
    const newRequire = { ...this.form.value };
    console.log(newRequire);
  }
  validateName(control:FormControl){
    if (!/^[a-zA-Zа-яА-Я'" ]+[a-zA-Zа-яА-Я]?$/.test(control.value)&&control.value!==''){
      return {
        wrongName:true
      }
    }
    return null;
  }
  validatePhone(control:FormControl){
    if (!/^\+?[0-9 ()-]{6,14}?$/.test(control.value)&&control.value!==''){
      return {
        wrongPhone:true
      }
    }
    return null;
  }
}
