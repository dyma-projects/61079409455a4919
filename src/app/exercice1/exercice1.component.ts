import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  liaison1: string = "premiere liaison"
  @Input() liaison2 :string ;
  liaison3:string ="liaison3";
  @Output() pushLiaison4: EventEmitter<string> = new EventEmitter;

  Liaison4(){
   
    this.pushLiaison4.emit(this.liaison3);
  }


  constructor() { }

  ngOnInit(): void {
    
  }

}
