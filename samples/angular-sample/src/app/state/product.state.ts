

export const PRODUCT_STATE = 'product_state';

export interface ProductState {
    products: ProductCount[];
}

export interface ProductCount {
    name: string,
    count: number
}