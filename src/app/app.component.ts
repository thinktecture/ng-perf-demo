import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxes: any[] = [];

  addBox() {
    this.boxes.push({});
  }

  addBoxes(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.addBox();
    }
  }
}
