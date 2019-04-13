import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-omeni',
  templateUrl: './omeni.component.html',
  styleUrls: ['./omeni.component.css'],
  animations:[
    trigger('fade',[
        transition("void => *",[
          style({opacity:0}),
          animate(1500)
        ])
    ])
  ]
})
export class OmeniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
