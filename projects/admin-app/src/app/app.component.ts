import { Component } from '@angular/core';
import { faUser,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-app'
  faUser = faUser
  faSignOutAlt = faSignOutAlt
}
