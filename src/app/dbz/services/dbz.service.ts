
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Killian',
    power: 950
  },{
    id: uuid(),
    name: 'Goku',
    power: 1000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 2000
  }]

  onNewCharacter( character:Character ):void {
    // this.characters.unshift(character)  //Lo añade al inicio
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter)     //Lo añade al final
  }

  onDeleteCharacter( index:number ):void {
    this.characters.splice(index,1)
  }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter ( character => character.id !== id );
  }

  constructor() { }
}
