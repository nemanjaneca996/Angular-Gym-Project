import { Component, OnInit } from '@angular/core';
import { NovostiService } from '../servisi/novosti.service';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css'],
  
})
export class PocetnaComponent implements OnInit {

  novosti;

  constructor(private service : NovostiService) { }

  ngOnInit() {
    this.service.getNovosti().subscribe(
      response => {
        this.novosti=response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
