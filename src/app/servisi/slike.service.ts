import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlikeService {

  constructor(private service : HttpClient) { }

  getCenovnik(){
    var slike = this.service.get("../../assets/jsons/slike.json");
    return slike;
  }
}
