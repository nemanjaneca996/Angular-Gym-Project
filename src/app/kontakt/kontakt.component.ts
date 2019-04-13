import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  animations:[
    trigger('fade',[
        transition("void => *",[
          style({opacity:0}),
          animate(1500)
        ])
    ])
  ]
})
export class KontaktComponent implements OnInit {

  form = new FormGroup({
      ime : new FormControl('', [Validators.required, Validators.minLength(3)]),
      prezime : new FormControl('', [Validators.required, Validators.minLength(4)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      subject : new FormControl('', Validators.required),
      message : new FormControl('', Validators.required)

  });

  get ime(){ return this.form.get("ime");}
  get prezime(){ return this.form.get("prezime");}
  get email(){ return this.form.get("email");}
  get subject(){ return this.form.get("subject");}
  get message(){ return this.form.get("message");}

  constructor() { }

  ngOnInit() {
  }

}
