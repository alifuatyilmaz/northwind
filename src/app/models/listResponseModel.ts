import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{ // Bu listeleme hem product hem category için ortak olduğu için T tipinde bir dizi tanımlıyoruz. Gelen veriye(product,category) göre davranacak
    data:T[];
}
//Bunu tanımladığımız için categoryResponseModel ve productResponseModel'e ihtiyaç yok
//Bunu tanımladığımız için categoryResponseModel ve categoryResponseModel'e ihtiyaç yok