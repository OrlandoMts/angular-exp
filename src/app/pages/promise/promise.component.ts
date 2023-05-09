import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: [],
})
export class PromiseComponent implements OnInit {
  ngOnInit(): void {
    const prom = new Promise((resolve, reject) => {
      console.log('hola mundo');
      resolve('respuesta de la promesa');
    });

    //Este es el proceso asincrono, la respuesta de la promesa
    prom.then((res) => console.log(res));

    console.log('fin oninit');

    this.getUsers().then((users) => console.log(users));
  }

  public getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body?.data))
        .catch(() => reject('Algo salio mal'));
    })

  }
}
