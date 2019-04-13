import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovostiService {

  constructor(private service : HttpClient) { }

  getNovosti(){
    var novosti = this.service.get("../..//assets/jsons/novosti.json");
    return novosti;
  }
}
