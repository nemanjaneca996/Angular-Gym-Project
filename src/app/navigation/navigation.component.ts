import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  links : any[];

  constructor() { }

  ngOnInit() {
    this.links=[
      {
        href : "",
        name : "POČETNA"
      },
      {
        href : "/cenovnik",
        name : "CENOVNIK"
      },
      {
        href : "/galerija",
        name : "GALERIJA"
      },
      {
        href : "/kontakt",
        name : "KONTAKT"
      },
      {
        href : "/omeni",
        name : "O MENI"
      }
    ];
  }

}
