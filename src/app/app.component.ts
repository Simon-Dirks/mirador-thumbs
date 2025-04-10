import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import Mirador from 'mirador/dist/es/src/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mirador-thumbs';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(async () => {
      const manifestUrl =
        'https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json';

      const config = {
        id: 'mirador',
        windows: [
          {
            manifestId: manifestUrl,
          },
        ],
      };
      const miradorInstance = Mirador.viewer(config);
    });
  }
}
