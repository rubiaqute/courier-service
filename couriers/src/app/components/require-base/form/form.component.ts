import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPayment, IRequire, IStatus, IWeight } from '../requires-base';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() onCloseButton = new EventEmitter();
  @Output() onSubmitButton = new EventEmitter<IRequire>();
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }

  weightSelection = IWeight;
  paymentSelection = IPayment;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.validateName,
      ]),
      phone: new FormControl('', [Validators.required, this.validatePhone]),
      email: new FormControl('', [Validators.email, Validators.required]),
      weight: new FormControl(IWeight.small, [Validators.required]),
      receiver: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.validateName,
      ]),
      receiverAddresse: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        this.validateAddresse,
      ]),
      receiverPhone: new FormControl('', [
        Validators.required,
        this.validatePhone,
      ]),
      sender: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.validateName,
      ]),
      senderAddresse: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        this.validateAddresse,
      ]),
      senderPhone: new FormControl('', [
        Validators.required,
        this.validatePhone,
      ]),
      payment: new FormControl(IPayment.client,  [Validators.required]),
    });
  }
  submit() {
    const data = { ...this.form.value };
    const newRequire: IRequire = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      weight: data.weight,
      receiverPhone: data.receiverAddresse,
      senderPhone: data.senderPhone,
      payment: data.payment,
      status: IStatus.start,
      date: new Date().toLocaleDateString(),
      receiver: data.receiver,
      receiverAddresse: data.receiverAddresse,
      sender: data.sender,
      senderAddresse: data.senderAddresse,
    };
    console.log(newRequire)
    this.onSubmitButton.emit(newRequire);
  }
  validateName(control: FormControl) {
    const value = control.value;
    if (!/^[a-zA-Zа-яА-Я'" ]+[a-zA-Zа-яА-Я]?$/.test(value) && value !== '') {
      return {
        wrongName: true,
      };
    }
    return null;
  }
  validateAddresse(control: FormControl) {
    const value = control.value;
    if (
      !/^[a-zA-Zа-яА-Я'",.-/0-9() ]+[a-zA-Zа-яА-Я'",.-/0-9() ]?$/.test(value) ||
      !/[0-9]/.test(value) ||
      (!/[a-zA-Zа-яА-Я]/.test(value) && value !== '')
    ) {
      return {
        wrongAddresse: true,
      };
    }
    return null;
  }
  validatePhone(control: FormControl) {
    if (!/^\+?[0-9 ()-]{6,14}?$/.test(control.value) && control.value !== '') {
      return {
        wrongPhone: true,
      };
    }
    return null;
  }
  closeForm() {
    this.onCloseButton.emit();
  }
}
