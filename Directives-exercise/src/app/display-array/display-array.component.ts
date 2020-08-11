import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-array',
  templateUrl: './display-array.component.html',
  styleUrls: ['./display-array.component.css']
})
export class DisplayArrayComponent{

  secretPassword = false;
  buttonClicks = [];
  buttonClick = 0;
  constructor() { }

  onButtonClick(){
    this.secretPassword = !this.secretPassword;
    this.buttonClicks.push(this.buttonClick);
    this.buttonClick++;
  }
}
