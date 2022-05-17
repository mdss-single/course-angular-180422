import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  Output,
  OnInit
} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}
}
