import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getAll() {
    return this.httpClient.get(environment.url_api + 'roles/list', { headers : this.authService.setHeader()})
  }
}
