import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  addLoanTypesForm: any = FormGroup;



  constructor() { }
  ngOnInit(): void {
  this.addLoanTypesForm = new FormGroup({
    'loanName': new FormControl('mahi', [Validators.required, Validators.minLength(3)]),
    'loanDescription': new FormControl('mihi'),
  })
}

loanObj = {
  loanName: 'mahimouni',
  loanDescription: 'mounimihi',
}

addLoanType(){
  console.log(this.addLoanTypesForm.value);
}

setValues(){
  this.addLoanTypesForm.setValue(this.loanObj);
}

resetForm(){
  this.addLoanTypesForm.reset();
}


}









