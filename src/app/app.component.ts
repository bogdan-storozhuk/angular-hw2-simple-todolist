import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hw2';
  age = 21;
  word = 'oleeee!';

  getRandom() {
    return Math.floor(Math.random() * 1000);
  }

  showMessage() {
    this.age = this.getRandom();
    this.word += '!';
  }

  randomLink() {
    return `/123123`;
  }
}
