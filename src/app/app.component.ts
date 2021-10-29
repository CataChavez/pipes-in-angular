import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Angular';
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percent: number = 0.234;
  salary: number = 1234.5;
  date: Date = new Date();

  language: string = '';

  promise = new Promise<string>((resolve)=> {
    setTimeout(()=> {
      resolve('Data Arrived');
    }, 4000);
  })

  heroe = {
    name: 'logan',
    keyName: 'Wolverine',
    age: 500,
    adress:{
      street: 'first',
      number:20
    }
  }
  
}
