import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'Anderson Sutil';
  photos: Photo[] = []; //<--- Para fotos retornar um Array de Objetos de tipo Photos

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {console.log(photos[0].description),
        this.photos = photos
      });
  }
}