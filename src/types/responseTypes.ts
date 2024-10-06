import { number, string } from "zod";

export interface Resp {
  data: {
    name: string;
    age: number;
  }[];
  status: number;
}
