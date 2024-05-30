import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router:Router){}

  SignupForm=new FormGroup({
    userName:new FormControl("",[Validators.required,Validators.minLength(6)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl("",[Validators.required,Validators.minLength(6)]),
    mobile:new FormControl("",[Validators.required])
  })

  onSubmit(){
    console.log(this.SignupForm.value)
    this.SignupForm.reset();
this.router.navigate(['/login'])
  }

}
