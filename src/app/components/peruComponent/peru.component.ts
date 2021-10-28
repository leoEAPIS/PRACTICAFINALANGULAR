import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {

  perudata: any = [];//myproyecto: any
  show: boolean = false;
  constructor(public paisService: JsonService) { 

    this.paisService.getperu().subscribe(data => {//getmyproyecto
      this.perudata = data;//myproyecto
      console.log()
    });
  }

  ngOnInit(): void {
  }
}
