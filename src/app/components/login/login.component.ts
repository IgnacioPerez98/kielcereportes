import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Usuarios} from "../../models/Usuarios";
import {ServiceAPIService} from "../../services/serviceAPI/service-api.service";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
  private users:Usuarios[]=[];
  private dilogin:LoginService;
  constructor(login:LoginService){
    this.dilogin = login;
    this.users = login.GetUsers();
    console.log(this.users)
  }
  public ValidarLogin(formulario:NgForm){
    let user = formulario.value.email;
    let pass = formulario.value.password;
    //ok esta almacendo la ing
    this.users.forEach((us)=>{
          if(us.usuario == user ){
            let c :string = this.dilogin.decrypt(user.contrasena);
            console.log(c);
            if (c == pass){
              alert("true");
              return;
            }
          }
    });
  }


}
