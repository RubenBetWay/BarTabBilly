export interface StockItemCardConfig {
  title: string;
  details: string;
  price: number;
}

export interface OrderInstruction extends StockItemCardConfig {
  qty: number;
}
