import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  deleteItem(id:number){
    this.onDelete.emit( id );
  }
}
