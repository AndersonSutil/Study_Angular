import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Anderson Sutil';
  photos:Object[] = []; //<--- Para fotos retornar um Array de Objetos de tipo Photos

  constructor(http: HttpClient) { //<--- Utilizando a Injeção de Dependência do HttpClient
    http
    .get<Object[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos =>{console.log(photos); this.photos = photos});
  }
}