import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import { CenovnikService } from '../servisi/cenovnik.service';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css'],
  animations:[
    trigger('fade',[
        transition("void => *",[
          style({opacity:0}),
          animate(1500)
        ])
    ])
  ]
})
export class CenovnikComponent implements OnInit {

  cenovnik;

  constructor(private service : CenovnikService) { }

  ngOnInit() {
    this.service.getCenovnik().subscribe(
      response => {
        this.cenovnik=response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
