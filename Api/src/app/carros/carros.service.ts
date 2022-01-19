import { Injectable } from "@angular/core";
import { getCarros } from "./getCarros";
import { Api } from "src/environments/environment";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarrosService{

  constructor(private httpClient : HttpClient){}

  public getCar():Observable<getCarros[]>{
    return this.httpClient.get<getCarros[]>(`${Api}carros`)
     //metodo get é para fazer consultas nao altera nada no servidor
  }

}