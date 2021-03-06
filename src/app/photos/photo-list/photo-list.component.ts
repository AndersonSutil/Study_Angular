import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  // styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
