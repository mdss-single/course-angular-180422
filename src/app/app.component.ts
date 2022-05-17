import {
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from '@angular/core';

import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'course-angular-180422';

  @ViewChild(SidenavComponent, { static: true })

  private sidenavComponent!: SidenavComponent;

  onMenuClick() {
    this.sidenavComponent.toggleSidenav();
  }
}
