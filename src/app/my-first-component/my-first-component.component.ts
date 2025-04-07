import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MessageDetailsComponent} from '../message-details/message-details.component';
import {MyFirstService} from '../services/my-first.service';

@Component({
  selector: 'app-my-first-component',
  imports: [FormsModule, NgIf, NgForOf, MessageDetailsComponent],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
    private service: MyFirstService
  ) {
      this.messages = this.service.getAllMessages()
      this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    });
    console.log(this.message);
  }

  deleteMessage(index: number) {
    this.messages.splice(index);
  }
}
