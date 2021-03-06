import {RestResponse} from "./RestResponse"
import {AttributeValuePair} from "./AttributeValuePair";
import {ProductType} from "../enumeration/ProductType";

export interface Product {
  id: number
  sku: string
  name: string
  menuOrder: number
  type: ProductType,
  categoryIds: number[]
  image?: string
  attributes: AttributeValuePair[]
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductResponse extends RestResponse<Product[] | string> {
}
