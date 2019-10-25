import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

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
