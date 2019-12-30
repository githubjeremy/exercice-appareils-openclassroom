import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Machine 1',
      status: 'éteint'
    },
    {
      name: 'Machine 2',
      status: 'allumé'
    },
    {
      name: 'Machine 3',
      status: 'éteint'
    },
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
   public onAllumer() {
     this.appareils.forEach(element => {
       if (element.status === 'éteint') {
         element.status = 'allumé';
       }
     });
   }
   public onEteindre() {
    this.appareils.forEach(element => {
      if (element.status === 'allumé') {
        element.status = 'éteint';
      }
    });
  }

}
