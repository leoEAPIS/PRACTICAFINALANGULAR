import { Component, OnInit } from '@angular/core';
import {JsonService } from '../../services/json.service'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent implements OnInit {

  datapais: any = [];
  show: boolean = false;

  constructor(public paisService: JsonService) { 
    this.paisService.getpais().subscribe(data => {
      console.log(data);
      this.datapais = data;
    });
   
  }

  
  ngOnInit(): void {
  }
 
    
}
