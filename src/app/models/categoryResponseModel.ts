import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{ // Product için yaptıklarımızı category içinde yaptık
    data:Category[]
}