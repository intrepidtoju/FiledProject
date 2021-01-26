import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {
  paymentForm: FormGroup | undefined;
  postId;

  validationMessages = {
    'cardNumber': {
      'required': 'This field is required',
      'max-length': 'The max length is 15'
    },

    'cardHolder': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    },
    'amount': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    },
    'expMon': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    },
    'expYear': {
      'required': 'This field is required',
      'max-length': 'The max length is 10'
    },
    'cvv': {
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

  constructor( private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required,  Validators.maxLength(18)]],
      cardHolder: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      expMon: ['', [Validators.required]],
      expYear: ['', [Validators.required]],
      cvv: ['', [Validators.required]]
    });

    this.paymentForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.paymentForm);
    });
  }

  onSubmit(): void {
    
  }
  onClick(): void {
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
            this.postId = data.id;
        })
        alert('done');

  }
  

  logValidationErrors( group: FormGroup = this.paymentForm): void {
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
