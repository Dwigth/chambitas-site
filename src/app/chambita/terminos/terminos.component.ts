import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    let elemento = document.getElementById('inicio');
    elemento.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  back() {
    this.router.navigate(['landing']);
  }

}
