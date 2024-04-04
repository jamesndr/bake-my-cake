export type CakeOrder = {
  id?: number;
  customerName?: string;
  customerPhoneNum?: number;
  productName?: string;
  state?: string;
  city?: string;
  street?: string;
  pincode?: number;
  deliveryDate?: Date;
  unit?: string;
  quantity?: number;
  message?: string;
  totalAmount?:number;
  status?: any
};