import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  userName = '';

  get isUserNameEmpty() {
    return this.userName.length > 0;
  }

  constructor(){  }

  onResetUsername() {
    this.userName = '';
  }
}
