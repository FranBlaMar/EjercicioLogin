import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private servicio: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = {email: this.email, password: this.password};
    this.servicio.register(user).subscribe(data =>{
      this.servicio.setToken(data.token);
      this.router.navigateByUrl('/');
    })
  }
}
