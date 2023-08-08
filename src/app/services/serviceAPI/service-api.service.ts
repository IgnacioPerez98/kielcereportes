import { Injectable } from '@angular/core';
import axios from 'axios';
import { Clientes } from 'src/app/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {
  private apiUrl = 'https://www.srvendpointptech.duckdns.org/api/Clientes/';

  constructor() { }

  public GetClientes():Clientes[]{
    let data :Clientes[] = [];

    let value = axios.get(this.apiUrl,{
        headers: {
          "Access-Control-Allow-Origin":"http://localhost:4200",
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':"GET",
          'Access-Control-Allow-Headers':"Origin,",
        },
        responseType: "json",
        withCredentials:true
      });
    value.then((response) => {
      try {
        response.data.forEach( (elem:any) =>{
            data.push(<Clientes>elem)
          }
        );
      }catch (e) {
        alert(e);
      }
    });
    return data;
  }

  public GetClienteByCode(codigo:string){
    let cliente :Clientes;
    let value = axios.get(this.apiUrl+codigo,{
      headers: {
        "Access-Control-Allow-Origin":"http://localhost:4200",
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':"GET",
        'Access-Control-Allow-Headers':"Origin,",
      },
      responseType: "json",
      withCredentials:true
    });
    value.then((response) => {
      try {
        response.data.forEach( (elem:any) =>{
            cliente = (<Clientes>elem)
            return;
          }
        );
      }catch (e) {
        alert(e);
      }
    });

  }
}
