import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstComponentComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-basics';
}
