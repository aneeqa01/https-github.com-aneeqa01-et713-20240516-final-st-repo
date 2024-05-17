import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';

@Component({
  selector: 'app-video-gallery',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent {
  videos = [
    { title: 'Innovator Island - Session 1', url: 'https://www.youtube.com/embed/GhZpSYQ6F9M?si=JY0K0bfHzT6TH9Pb' },
    { title: 'Innovator Island - Session 2', url: 'https://www.youtube.com/embed/EhgOoFbCID0?si=Iw3JnA37jj92y-M9' },
    { title: 'Innovator Island - Session 3', url: 'https://www.youtube.com/embed/aNgmgZjzNr4?si=Z9l4p0kJ4-jC3ue9' },
    { title: 'Innovator Island - Session 4', url: 'https://www.youtube.com/embed/G1Hukehp52Q?si=Fs5CdLJBrG40e9fk' }

 
  ];
}
