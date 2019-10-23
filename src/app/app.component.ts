import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Anderson Sutil';
  photos = [{
    url: 'https://i.pinimg.com/originals/05/85/59/0585598979733e17e5c3c9a6f0309cf9.jpg',
    description: 'Desenho'
  },
  {
    url: 'https://i.pinimg.com/564x/21/ed/dc/21eddc409004041f8b8dd6e01c310481.jpg',
    description: 'Desenho2'
  }
  ];
}