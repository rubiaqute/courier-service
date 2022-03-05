import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form:FormGroup
  constructor(){
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(6)])
    });
  }
  submit(){
console.log("form submitted: ", this.form)
const newRequire={...this.form.value}
console.log(newRequire)
  }

}
