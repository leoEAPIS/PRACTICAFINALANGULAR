import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  nombre: String = "Leopoldo Zelada zelada";
  email: String = "szeladaz15@unc.edu.pe";
  direccion: String = "JR. calcedonias N°2060";
  telefono: String = "984643730";
  socialMedia: Array<socialMedia> = [];

  constructor() {   
    var social1 = new  socialMedia("Facebook", "https://www.facebook.com/leopoldo.zeladazelada", "fab fa-facebook-square");
    var social2 = new  socialMedia("Instagram", "https://www.instagram.com/leopoldozeladazelada/?hl=es", "fab fa-instagram");

    this.socialMedia.push(social1);
    this.socialMedia.push(social2);

  }

  ngOnInit(): void {
  }

}

class socialMedia { 
  name: String;
  url: String;
  icon: String;
  constructor( name: String,
    url: String,
    icon: String,) {
    this.name = name;
    this.url = url;
    this.icon = icon;
    };
}