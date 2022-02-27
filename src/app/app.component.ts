import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  liaison2 :string="deuxieme liaison";
  liaison4:string="liaison4"

  getLiaison4(liaison:string){
    this.liaison4 = liaison
  }
}
