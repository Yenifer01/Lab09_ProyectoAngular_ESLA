import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from "./listado/listado.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListadoComponent]
})
export class AppComponent {
  title = 'laboratorio09-grupal';
}
