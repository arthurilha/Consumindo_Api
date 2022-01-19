import { Component, OnInit } from '@angular/core';
import { CarrosService } from './carros.service';

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
    this.car.getCarId(4).subscribe((carros)=>{
      console.log(carros)
    })
  }

}
