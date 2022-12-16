import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.formBuilder.group({
  username: ['', [Validators.required, Validators.minLength(5)]],
  email: ['', [Validators.email]],
  first_name: ['',  [Validators.required]],
  last_name: ['',  [Validators.required]],
  address: [],
  pass: this.formBuilder.group({
    password: ['',[Validators.required, Validators.minLength(4)]],
    rePassword: []
  },
  {
    validators: [passwordValidator('password', 'rePassword')]
  })

});

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}
  
  registerHandler() {
    if (this.form.invalid) { return; }
    const {username, email, first_name, last_name, address, pass: {password, rePassword} = {}} = this.form.value;
    this.authService.register(username!, email!, first_name!, last_name!, address!, password!, rePassword!)
    .subscribe(user => {
      this.router.navigate(['/book/catalog']);
    });
  }
}
