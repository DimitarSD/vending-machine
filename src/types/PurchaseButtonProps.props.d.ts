export type PurchaseButtonProps =  {
  onProductSelect: (productName: string, productPrice: number) => void;
  onPurchase: (change: number) => void;
}