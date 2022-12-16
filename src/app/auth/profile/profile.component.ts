import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  showEditMode = false;
  formSubmitted = false;

 

  get user() {
    const { username, email, first_name, last_name, address} = this.authService.user!;
    return {
      username,
      email,
      first_name,
      last_name,
      address
    };
  }


  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
    this.createProfileForm({ ...this.user });
  }

  createProfileForm(formValue: any){
    this.form = this.formBuilder.group({
      username: [formValue.username, [Validators.required, Validators.minLength(5)]],
      email: [formValue.email, [ Validators.email]],
      first_name: [formValue.first_name, [Validators.required]],
      last_name:  [formValue.last_name, [Validators.required]],
      address: [formValue.address]
    })
    
  }

  toggleEditMode(){
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }


  saveProfile(): void {
    this.formSubmitted = true;
    if (this.form.invalid) { return; }
    const { username, email, first_name, last_name, address} = this.form.value;
    this.authService.saveProfile(username, email, first_name, last_name, address).subscribe(() => {
      this.toggleEditMode();
    });
  }
}

