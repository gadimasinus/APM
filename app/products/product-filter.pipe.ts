
import {PipeTransform, Pipe} from '@angular/core';
import {IProduct} from './product';

@Pipe({
    name:"ProductFilter"
})
export class ProductFilterPipe implements PipeTransform
{
    transform(value: IProduct[] , filterBy : string ): IProduct[] {
   
        filterBy  = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(x=>
             x.productName.toLocaleLowerCase().indexOf(filterBy) != -1) : value;
    }

}