import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = []

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'John Doe',
      email: 'ksenes@gmila.com',
      message: 'Hello world'
    })
    this.insert({
      name: 'John Doe',
      email: 'ksenes@gmila.com',
      message: 'Hello world'
    })
    this.insert({
      name: 'John Doe',
      email: 'ksenes@gmila.com',
      message: 'Hello world'
    })
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
