import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  @Input() isOpen: boolean = false;
  @Output() closeSheet = new EventEmitter<void>(); 

  close() {
    this.closeSheet.emit();
  }
}
