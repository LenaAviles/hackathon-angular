import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { label: 'Categories', icon: 'fa-th-large', routerLink: ['/categories'] },      
      { label: 'Add a Question', icon: 'fa-plus-square', routerLink: ['/add-question'] },
      { label: 'Questions', icon: 'fa-question', routerLink: ['/questions'] },
      {
        label: 'Menu', icon: 'fa-bars', items: [
          { label: 'Categories', icon: 'fa-th-large', routerLink: ['/categories'] },          
          { label: 'Add a Question', icon: 'fa-plus-square', routerLink: ['/add-question'] },
          { label: 'Questions', icon: 'fa-question', routerLink: ['/questions'] },
        ]
      },
      // {
      //   label: 'Login', icon: 'fa-lock', items: [
      //     { label: 'Войти', icon: 'fa-unlock-alt', routerLink: ['/login'] },          
      //     { label: 'Выйти', icon: 'fa-lock', routerLink: ['/login'] },
      //     { label: 'Регистрация', icon: 'fa-unlock-alt', routerLink: ['/signup'] },
      //   ]
      // },
    ]
  }
}
