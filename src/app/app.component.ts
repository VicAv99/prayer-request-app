import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evening Light Fellowship';
  links = [
    {path: '/prayer-request-details', icon: 'loyalty', label: 'Prayer Request'},
    {path: '/prayer-request-lists', icon: 'list', label: 'Prayer List'}
  ]
}
