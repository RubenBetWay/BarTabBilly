import { Injectable } from '@angular/core';
import { AggregatedItemOrdered, TabData } from '../data/data.model';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  async generateCSVReceipt(tab: TabData): Promise<void> {
    let content = '';

    const newLine = () => {
      content += '\n';
    };

    const setHeaders = () => {
      content += 'Receipt,';
      content += ',Receipt number:,';
      content += `${tab.id},`;
      newLine();
      newLine();
    };

    const setTabDetails = () => {
      content += 'Time opened:,';
      content += this.formattedDateString(tab.openTimeStamp);
      content += 'Time closed:,';
      if (tab.settledTimeStamp)
        content += this.formattedDateString(tab.settledTimeStamp!);
      else content += '-,';
      newLine();
      newLine();
    };

    const setAggregatedItems = () => {
      const setLineItemHeaders = () => {
        content += 'Aggregated Item list';
        newLine();
        content += 'Item,';
        content += 'Qty,';
        content += 'Price (ZAR),';
        content += 'Total (ZAR),';
        newLine();
      };

      const setLineItem = (item: AggregatedItemOrdered) => {
        content += `${item.title},`;
        content += `${item.qty},`;
        content += `${item.price},`;
        content += `${item.subtotal},`;
        newLine();
      };
      const setTotalLine = (tally: number) => {
        content += 'Total,,,';
        content += tally;
        newLine();
      };

      let tally = 0;
      setLineItemHeaders();
      tab.itemsOrderedSummary.forEach((item: AggregatedItemOrdered) => {
        setLineItem(item);
        tally += item.subtotal;
      });
      setTotalLine(tally);
      newLine;
    };

    setHeaders();
    setTabDetails();
    setAggregatedItems();

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const fileHandle = await (window as any).showSaveFilePicker({
      suggestedName: `receipt_${tab.id}.csv`,
      types: [{ description: 'CSV file', accept: { 'text/csv': ['.csv'] } }],
    });

    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
  }

  async generatePDFReceipt(tab: TabData): Promise<void> {
    const doc = new jsPDF();

    const setHeaders = () => {
      doc.text('Receipt', 10, 10);
      doc.text(`Receipt number: ${tab.id}`, 10, 20);
      doc.text(`Date: ${this.formattedDateString(new Date())}`, 10, 30);
      doc.text('\n', 10, 40); // Adds spacing
    };

    const setTabDetails = () => {
      doc.text(
        `Time opened: ${this.formattedDateString(tab.openTimeStamp)}`,
        10,
        50
      );
      doc.text(
        `Time closed: ${
          tab.settledTimeStamp
            ? this.formattedDateString(tab.settledTimeStamp)
            : '-'
        }`,
        10,
        60
      );
      doc.text('\n', 10, 70); // Adds spacing
    };

    const setAggregatedItems = () => {
      doc.text('Aggregated Item List', 10, 80);
      doc.text('Item', 10, 90);
      doc.text('Qty', 60, 90);
      doc.text('Price (ZAR)', 110, 90);
      doc.text('Total (ZAR)', 160, 90);

      let yOffset = 100;
      let tally = 0;

      tab.itemsOrderedSummary.forEach((item: AggregatedItemOrdered) => {
        doc.text(item.title, 10, yOffset);
        doc.text(`${item.qty}`, 60, yOffset);
        doc.text(`${item.price}`, 110, yOffset);
        doc.text(`${item.subtotal}`, 160, yOffset);
        yOffset += 10; // Move down for next line
        tally += item.subtotal;
      });

      doc.text(`Total: ZAR ${tally}`, 10, yOffset);
    };

    setHeaders();
    setTabDetails();
    setAggregatedItems();

    // Save PDF
    const pdfBlob = doc.output('blob');
    const fileHandle = await (window as any).showSaveFilePicker({
      suggestedName: `receipt_${tab.id}.pdf`,
      types: [
        { description: 'PDF file', accept: { 'application/pdf': ['.pdf'] } },
      ],
    });

    const writable = await fileHandle.createWritable();
    await writable.write(pdfBlob);
    await writable.close();
  }

  private formattedDateString(date: Date): string {
    return `${new Date(date).toLocaleString().replaceAll(',', ' ')},`;
  }
}
