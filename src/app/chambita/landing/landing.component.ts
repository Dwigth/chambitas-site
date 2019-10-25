import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  scroll(seccion) {
    let elemento = document.getElementById(seccion);

    if (seccion) {
      elemento.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  terminosYPoliticas(seccion: string) {
    this.router.navigate([seccion]);
  }

}
