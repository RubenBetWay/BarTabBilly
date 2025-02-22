import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  @Input() isOpen: boolean = false; // Control visibility from parent
  @Output() closeSheet = new EventEmitter<void>(); // Emit event when closing

  close() {
    this.closeSheet.emit(); // Notify parent to close the sheet
  }
}
