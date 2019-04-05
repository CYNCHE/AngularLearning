import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  isShown: boolean = false;
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    this.isShown = false;
  }

  onToggle() {
    this.isShown = !this.isShown;
  }
}
