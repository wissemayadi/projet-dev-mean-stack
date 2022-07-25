import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm !:FormGroup;
  formSubmitted: boolean = false;
  constructor(private router : Router,private s:Auth) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }
  register() {
    this.formSubmitted = true;
    if (this.signupForm.invalid) {
      return alert("please fill the blank or check your error");
    }
    this.s.registerUser(this.signupForm.value).subscribe((response: any) => {
       alert("register success")
        // redirect to dashboard
        this.router.navigateByUrl('/auth/login');
      },
      (error: any)=>{
        console.log(error);

        if (error.status === 404) {
          alert('error')
        }
      });
  }
  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }
  get username() { return this.signupForm.get('username'); }
  get phone() { return this.signupForm.get('phone'); }
  
}

