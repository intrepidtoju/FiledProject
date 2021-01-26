import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.scss']
})
export class ListPaymentComponent implements OnInit {
  payForm: FormGroup | undefined;

  validationMessages = {
    'cardNumber': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    },

    'cardHolder': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    }
  };

  formErrors = {
    'cardNumber': '',
    'cardHolder': '',
    'amount': '',
    'expMon': '',
    'expYear': '',
    'cvv': ''
  };

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.payForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.maxLength(15)]],
      cardHolder: [''],
      amount: [''],
      expMon: [''],
      expYear: [''],
      cvv: ['']
    });

    this.payForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.payForm);
    });
  }

  onSubmit(): void {
    
  }

  logValidationErrors( group: FormGroup = this.payForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && 
          (abstractControl.touched || abstractControl.dirty)){
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors){
            if (errorKey){
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

}

