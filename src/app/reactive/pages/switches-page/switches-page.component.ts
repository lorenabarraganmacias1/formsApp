import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender:['M', Validators.required],
    wantNotifications:[true, Validators.required],
    termsAndConditions:[false, Validators.requiredTrue ],

  });
  public person = {
    gender:'F',
    wantNotifications:false
    
  }

  constructor (private fb: FormBuilder ){}

  ngOnInit(): void{
    this.myForm.reset(this.person)
  }


    isValidField( field:string ):boolean | null {
      return this.myForm.controls[field].errors
          && this.myForm.controls[field].touched
    }
  


  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.person = this.myForm.value;
    console.log(this.myForm.value);
    console.log(this.person)

  }

}
