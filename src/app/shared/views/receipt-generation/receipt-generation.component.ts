import { Component, Input } from '@angular/core';
import {
  ReceiptTypeButtons,
  ReceiptTypeSelection,
} from './receipt-generation.const';
import { ReceiptService } from '../../services/receipt/receipt.service';
import { TabData } from '../../services/data/data.model';

@Component({
  selector: 'app-receipt-generation',
  templateUrl: './receipt-generation.component.html',
  styleUrls: ['./receipt-generation.component.scss'],
})
export class ReceiptGenerationComponent {
  @Input() tab: TabData | undefined

  options = ReceiptTypeButtons;

  constructor(private receiptService: ReceiptService){}

  onOptionClicked(buttonName: string) {
    
    switch (buttonName as ReceiptTypeSelection) {
      case ReceiptTypeSelection.CSV: {
        if (!this.tab) return
        this.receiptService.generateCSVReceipt(this.tab)
        break;
      }
      case ReceiptTypeSelection.PDF: {
        if (!this.tab) return
        this.receiptService.generatePDFReceipt(this.tab)
        break;
      }
    }
  }
}
