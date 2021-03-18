import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number { // value unitPrice'ın kendisi.Aslında (value(unitPrice): number, 10:number)
    return value + (value*rate/100) ;
  }

}
