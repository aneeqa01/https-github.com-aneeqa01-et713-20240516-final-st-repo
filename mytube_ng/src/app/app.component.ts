import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, JumbotronComponent, ContentComponent, FooterComponent, VideoGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mytube_ng';
}
