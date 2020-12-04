import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.scss'],
})
export class ButtonClickComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clickHandler(event) {
    console.log('clicked!');
  }
}
