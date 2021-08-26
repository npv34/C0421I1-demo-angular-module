import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleService} from "../../../services/role.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  formUserAdd: FormGroup | undefined;
  roles: any;
  constructor(private fb: FormBuilder,
              private roleService: RoleService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formUserAdd = this.fb.group({
      name: [''],
      email: [''],
      role: [''],
      password: [''],
      password_confirmation: ['']
    });

    this.roleService.getAll().subscribe(res => {
      this.roles = res;
    })


  }

  submit() {
      let data = this.formUserAdd?.value;
      this.userService.create(data).subscribe(res => {
        this.router.navigate(['admin/users'])
      })
  }

}
