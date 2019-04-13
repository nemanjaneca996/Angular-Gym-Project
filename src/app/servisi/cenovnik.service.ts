import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenovnikService {

  constructor(private service : HttpClient) { }

  getCenovnik(){
    var cenovnik = this.service.get("../../assets/jsons/cenovnik.json");
    return cenovnik;
  }
}
