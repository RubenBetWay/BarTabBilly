import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import {
  OrderInstruction,
  StockItemCardConfig,
} from 'src/app/shared/components/stock-item-card/stock-item-card.model';
import { OrderSummaryView } from 'src/app/shared/views/order-summary/order-summary.component';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss'],
})
export class OrderMenuComponent implements OnInit, AfterViewInit {
  @Input() productMenu: StockItemCardConfig[] | undefined;
  @Input() orderItems: OrderItem[] = [];
  @Output() onOrderPlaced: EventEmitter<OrderItem[]> = new EventEmitter();

  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: OrderSummaryView;

  extraSpaceStyling = {};
  showBottomSheet = false;

  ngOnInit() {
    // If there are previously ordered items, need to add these
    // to the bottom sheet
    if (this.orderItems.length === 0) return;
    this.showBottomSheet = true;
    // Need the bottom sheet to render before we can update it
    setTimeout(() => {
      this.orderSummary.updateOrder(this.orderItems);
    }, 350);
  }

  ngAfterViewInit() {
    if (this.bottomSheetRef?.nativeElement) {
      this.extraSpaceStyling = {
        height: `${this.bottomSheetRef.nativeElement.offsetHeight}px`,
      };
    }
  }

  onOrderInstruction(orderInstruction: OrderInstruction) {
    this.updateOrder(orderInstruction);
    this.renderBottomSheet();
  }

  private updateOrder(orderInstruction: OrderInstruction) {
    this.orderItems.push({
      title: orderInstruction.title,
      price: orderInstruction.price,
      qty: orderInstruction.qty,
    });
    this.orderSummary.updateOrder(this.orderItems);
  }

  private renderBottomSheet() {
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
