import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    return (show) ? '*'.repeat(value.length) : value;//condicional ternaria si show esta true, repite el asterisco el largo del value sino value
  }
}

