import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { 
  signupForm !:FormGroup;
  formSubmitted: boolean = false;
  constructor(private router : Router,private s:AuthentificationService) { }

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

}
