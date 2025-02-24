import { Injectable } from '@angular/core';
import { AggregatedItemOrdered, TabData } from '../data/data.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  async generateCSVReceipt(tab: TabData): Promise<void> {
    let content = ''

    const newLine = () => {content += '\n'}

    const setHeaders = () => {
      content += 'Receipt'
      newLine()
    }

    const setTabDetails = () => {
      content += 'Receipt number:,'
      content += `${tab.id},`
      content += 'Time opened:,'
      content += `${tab.openTimeStamp},`
      content += 'Time closed:,'
      content += `${tab.settledTimeStamp}`
      newLine()
    }

    const setLineItems = () => {
      const setLineItemHeaders = () => {
        content += 'Item,'
        content += 'Qty,'
        content += 'Price,'
        content += 'Total,'
        newLine()
      }

      const setLineItem = (item: AggregatedItemOrdered) => {
        content += `${item.title},`
        content += `${item.qty},`
        content += `${item.price},`
        content += `${item.subtotal},`
        newLine()
      }

      setLineItemHeaders()
      tab.itemsOrderedSummary.forEach((item: AggregatedItemOrdered) => {
        setLineItem(item)
      })
    }

    setHeaders()
    setTabDetails()
    setLineItems()

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const fileHandle = await (window as any).showSaveFilePicker({
      suggestedName: `receipt_${tab.id}.csv`,
      types: [{ description: 'CSV file', accept: { 'text/csv': ['.csv'] } }]
    });
    
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
  }}
