import { Component, OnInit } from '@angular/core';
import {JsonService } from '../../services/json.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  listdate: any = [];
  show: boolean = false;
  constructor(public servico: JsonService) { 
    this.servico.getjson().subscribe(data => {
      this.listdate = data;
    });

  }
  
  ngOnInit(): void {
  }
  
}
