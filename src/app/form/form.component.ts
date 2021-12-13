import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ValidationErrors,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myform = new FormGroup({
    income: new FormControl('', Validators.required),
    loan: new FormControl('', Validators.required),
    term: new FormControl('', Validators.required),
    downPayment: new FormControl('', Validators.required)

  })
  steps: any = 1;
  answers$ : any;
  income: any;



  constructor() { }

  options=[
    {opts:'Yes',},
    {opts:"No"}
  ]

  ngOnInit(): void {
    
    this.display()
  }

  get Income(){
    return this.myform.get('income')
    
  }

  get Loan(){
    return this.myform.get('loan')
  }

  get Term(){
    return this.myform.get('term')
  }

  get DownPayment(){
    return this.myform.get('downPayment')
  }
  display(){
    this.answers$ = localStorage.getItem('formValue');
    // console.log(this.answers$)

     
  }

  next(){
    this.steps = this.steps + 1
  }

  previous(){
    this.steps = this.steps - 1
    // console.log('go back')
  }

  submit(){
    // console.log(this.myform.value)
    localStorage.setItem("formValue", this.myform.value);
    this.next();
    
    // this.
  }

  serializeSummary(){
    localStorage.clear()
    this.steps = 1;
  }

  

}
