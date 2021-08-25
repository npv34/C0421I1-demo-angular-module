import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   formRegister: FormGroup | undefined
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
     this.formRegister = this.fb.group({
       name: [''],
       email: [''],
       password: [''],
       password_confirmation: ['']
     })
  }

  submit() {
     let data = this.formRegister?.value;
     this.authService.register(data).subscribe(res => {
       this.router.navigate(['login']).then(res => {

       })
     })
  }
}
