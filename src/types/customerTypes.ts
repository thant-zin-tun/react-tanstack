export type Customers = {
  customers: CustomerObject[];
  count: number;
  pages: number;
  next_page: null | string;
  previous_page: null | string;
};

export type CustomerObject = {
  id: number | null;
  name: string;
  phone: string;
  address: string;
  profile_image: null;
  email: string;
  isCustomer: boolean;
};

export interface SuccessResponse {
  status: string;
  customer: CustomerObject;
}

export interface ErrorResponse {
  status: string;
  errors: any;
}

export type CustomerApiResponse = SuccessResponse | ErrorResponse;
