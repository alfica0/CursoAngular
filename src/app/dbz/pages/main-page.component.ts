import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';

@Component({
  selector:'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Killian',
    power: 950
  },{
    name: 'Goku',
    power: 1000
  },{
    name: 'Vegeta',
    power: 2000
  }]

  onNewCharacter( character:Character ):void {
    // this.characters.unshift(character)  //Lo añade al inicio
    this.characters.push(character)     //Lo añade al final
  }

}
