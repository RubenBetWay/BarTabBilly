import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-open-tab-confirmation',
  templateUrl: './open-tab-confirmation.component.html',
  styleUrls: ['./open-tab-confirmation.component.scss']
})
export class OpenTabConfirmationComponent {
  @Input() isJustMe: boolean = false;

}
