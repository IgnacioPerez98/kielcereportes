import {Usuarios} from "./Usuarios";

export class RolesAuth{

  public IsAllowed(user:Usuarios):boolean{
      return true;
  }
}
