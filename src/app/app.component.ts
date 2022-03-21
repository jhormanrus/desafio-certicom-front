import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `]
})
export class AppComponent {
  title = 'desafio-certicom-front';
}
