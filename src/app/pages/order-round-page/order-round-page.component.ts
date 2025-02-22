import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { OrderInstruction } from 'src/app/shared/components/stock-item-card/stock-item-card.model';
import { StockItemCardConfigs } from './order-round-page.const';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-order-round-page',
  templateUrl: './order-round-page.component.html',
  styleUrls: ['./order-round-page.component.scss'],
})
export class OrderRoundPageComponent implements AfterViewInit {
  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;

  stockItemCardConfigs = StockItemCardConfigs;
  showBottomSheet = false;
  bottomSheetHeight = 0;
  extraSpaceStyling = {};

  ngAfterViewInit() {
    if (this.bottomSheetRef?.nativeElement) {
      this.extraSpaceStyling = {
        height: `${this.bottomSheetRef.nativeElement.offsetHeight}px`,
      };
    }
  }

  onOrderInstruction(orderInstruction: OrderInstruction) {
    console.log(orderInstruction);
    this.showBottomSheet = true;
    setTimeout(() => {
      if (this.bottomSheetRef?.nativeElement) {
        this.extraSpaceStyling = {
          height: `${this.bottomSheetRef.nativeElement.offsetHeight}px`,
        };
      }
    });
  }
}
