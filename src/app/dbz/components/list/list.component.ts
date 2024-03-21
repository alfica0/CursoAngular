import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public ListCharaters: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  deleteItem(index:number){

  }
}
