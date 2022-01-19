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

  public getCarId(id : number):Observable<getCarros>{
    return this.httpClient.get<getCarros>(`${Api}carros/${id}`)
    //metodo get id é para fazer consultas especificas no servidor como carro de id =1 
  }

  public postCar(carrinho : getCarros ):Observable<getCarros>{
    return this.httpClient.post<getCarros>(`${Api}carros`, carrinho)
    // metodo post é para adicionar novos carros no servidor 
  }

  public putCar(carrinho : getCarros):Observable<getCarros>{
    return this.httpClient.put<getCarros>(`${Api}carros/${carrinho.id}`, carrinho)
    // o metodo put ser para atualizar um iten que esta no servidor ou seja um carro
  }

  public deletCar(carrinho : getCarros): Observable<getCarros>{
    return this.httpClient.delete<getCarros>(`${Api}carros/${carrinho.id}`)
  }

}