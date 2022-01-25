import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../interfaces/user.interface';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String = "";
  password:String = "";
  constructor(private servicio: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  
  login():void{
    const user = {email: this.email, password: this.password};
    this.servicio.login(user).subscribe({
      next: (data) => {this.servicio.setToken(data.token)
      this.router.navigateByUrl('/')},
      error: (error) => console.log(error)
    });
  }
}
