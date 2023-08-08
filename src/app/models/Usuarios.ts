import {RoleDefinition} from "./RoleDefinition";
import * as CryptoJS from "crypto-js";

export class Usuarios {
  id:number;
  roles:RoleDefinition;
  usuario:string;
  correo:string;
  contrasena:string;
}
