import { Component, OnInit } from '@angular/core';
import { CarrosService } from './carros.service';
import { getCarros } from './getCarros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  constructor(private car : CarrosService) { }

  ngOnInit(): void {
  }

  obterTodos(){
    this.car.getCar().subscribe((carros) => {
      console.log(carros)
    })
  }

  obterUm(){
    this.car.getCarId(4).subscribe((carro)=>{
      console.log(carro)
      console.log(carro.marca)
    })
  }


  adicionarCarro(){
    const newCar : getCarros = {
       'ano' : 'civic',
       'marca' : 'honda' 
    }

    this.car.postCar(newCar).subscribe((novoCarro)=>{
        console.log(novoCarro)
    })
  }
}
