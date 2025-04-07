import {Routes} from '@angular/router';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {AboutComponent} from './about/about.component';
import {MenuComponent} from './menu/menu.component';

export const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'menu',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: MyFirstComponentComponent
  },
  {
    path: 'home',
    component: MyFirstComponentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  }
];


