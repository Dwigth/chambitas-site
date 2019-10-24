import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tuchambita';


  scroll(seccion) {
    let elemento = document.getElementById(seccion);

    if (seccion) {
      elemento.scrollIntoView({ block: "start", behavior: "smooth" });
    }

  }

}

