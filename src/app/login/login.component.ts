import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public formData = new FormGroup({
    userName: new FormControl("admin"),
    password: new FormControl("admin"),
  });

  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit(): void {
    
  }

 

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    this.authService.login(this.userName, this.password)
      .subscribe(data => {
        console.log("Login success: ", + data);

        if(data) this.router.navigate(['/gallery']);
      });
  }

}
