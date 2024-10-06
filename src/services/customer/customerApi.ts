import { threadId } from "worker_threads";
import {
  customerCreateEndPoint,
  customerEndPoint,
} from "../../constants/endPoint";
import {
  CustomerApiResponse,
  CustomerObject,
  Customers,
} from "../../types/customerTypes";
import { ResponseType } from "../../types/resposeType";

import axiosInstance from "../config/axios";

export async function fetchCustomer(): Promise<Customers> {
  try {
    let response = await axiosInstance.get<Customers>(customerEndPoint);
    let customers: Customers = response.data;
    return customers;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchCustomerById(id: number): Promise<CustomerObject> {
  try {
    let response = await axiosInstance.get<CustomerObject>(
      `${customerEndPoint}/${id}`
    );
    let customer: CustomerObject = response.data;
    return customer;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCustomerByFilter(
  filterValues: any
): Promise<Customers> {
  try {
    let response = await axiosInstance.get<Customers>(
      `${customerEndPoint}?${filterValues}`
    );
    let customers: Customers = response.data;
    return customers;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addCustomer(
  values: CustomerObject
): Promise<CustomerApiResponse> {
  try {
    let response = await axiosInstance.post(customerCreateEndPoint, values);
    let customer: CustomerApiResponse = response.data;
    return customer;
  } catch (error) {
    throw error;
  }
}

export async function deleteCustomerById(id: number): Promise<ResponseType> {
  try {
    let response = await axiosInstance.delete(
      `${customerEndPoint}/${id}/delete`
    );
    let data: ResponseType = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
