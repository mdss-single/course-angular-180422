import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  OnInit
} from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatDrawer, { static: true })
  private matDrawer!: MatDrawer;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

  toggleSidenav() {
    this.matDrawer.toggle();
    this.changeDetectorRef.markForCheck();
    console.log('fuck')
  }

  ngOnInit(): void {}
}
