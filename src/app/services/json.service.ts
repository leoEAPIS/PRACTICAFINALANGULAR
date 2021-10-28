import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  baseurl = 'https://jsonplaceholder.typicode.com/posts';
  paisurl = 'https://restcountries.com/v3.1/all';
  peruurl="https://restcountries.com/v3.1/name/peru";
  apiURL="http://localhost:3000/api";

  constructor(private httpClient: HttpClient) {
    console.log('listo app');
  }

  httpOptions={
    Headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getjson() {
    const headers = new HttpHeaders({
      "content-type": "application/json"
      
    });
    return this.httpClient.get(this.baseurl, { headers });
  }
  getpais() {
    return this.httpClient.get(this.paisurl);
  }
  getperu() {
    return this.httpClient.get(this.peruurl);
  }
  getpacientes(){
    return this.httpClient.get(this.apiURL+'/paciente');
  }

}
