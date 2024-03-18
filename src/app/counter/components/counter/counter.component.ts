import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="getMasUno(-1)">-1</button><button (click)="getReset()">Reset</button><button (click)="getMasUno(+1)">+1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter:number = 10;

  getMasUno(valor:number):void{
    this.counter += valor;
  };

  getReset(){
    this.counter = 10;
  }
  ngOnInit() { }
}
