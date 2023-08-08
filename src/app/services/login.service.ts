import { Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private key :string = "+e7LXP=t&@D,h]X]FT2dK9u9!\\\\ATwZ<TTzB>G/}&rK>&%AD'xbue(yC<-9x!L^_P*";

  public users:Usuarios[]=[]
  apiUrl:string = "https://www.srvendpointptech.duckdns.org/api/Users";
  constructor()
  {

  }

  public GetUsers():Usuarios[]{
    let data :Usuarios[] = [];

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
           data.push(<Usuarios>elem);
          }
        );
      }catch (e) {
        alert(e);
      }
    });
    return data;
  }

  public decrypt(ciphertext: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.key);
    const encryptedBytes = CryptoJS.enc.Base64.parse(ciphertext);
    const iv = encryptedBytes.clone();
    iv.sigBytes = 16;
    iv.clamp();
    const ciphertextBytes = encryptedBytes.words.slice(4); // Extract ciphertext words
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key, { iv });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

}
