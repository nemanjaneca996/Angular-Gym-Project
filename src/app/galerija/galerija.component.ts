import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import { SlikeService } from '../servisi/slike.service';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css'],
  animations:[
    trigger('fade',[
        transition("void => *",[
          style({opacity:0}),
          animate(1500)
        ])
    ])
  ]
})
export class GalerijaComponent implements OnInit {

  slike;

  constructor(private service : SlikeService) { }

  ngOnInit() {
    this.service.getCenovnik().subscribe(
      response => {
        this.slike=response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
