import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  public formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  get f() { return this.formData.controls; }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    if (this.formData.invalid)
      return;

    this.authService.login(this.userName, this.password)
      .subscribe(data => {
        if (data) this.router.navigate(['/gallery']);
      });
  }

}
