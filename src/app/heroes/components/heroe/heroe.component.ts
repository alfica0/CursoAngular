import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})

export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedNmame():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  getchangAge():void{
    this.age = 20;
  }

  getChangeName():void{
    this.name = "spiderman";
  }

  getReset():void{
    this.age = 45;
    this.name = "ironman";
    document.querySelectorAll('p')!.forEach(element => {
      element.innerHTML = '<p>DesdeAngular</p>'
    });
  }
};
