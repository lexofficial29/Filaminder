export interface Spool {
  id: string;
  brand: string;
  material: string;
  color: string;
  purchasePrice: number;
  currency: string;      // USD
  totalWeight: number;   // grams
  currentWeight: number; // grams
}