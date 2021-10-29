import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizade'
})
export class CapitalizadePipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {//se cambio el valor a string, el argumento ya no es un arreglo y se le indica de que tipo es  el valor de salida 
    value= value.toLocaleLowerCase();//se convierte a minuscula
    let names = value.split(" ");//se separa el valor por espacios
    if(active){
      names = names.map(name => name[0].toUpperCase() + name.substr(1))//se convierte la primera letra a mayuscula y se le agrega el resto de letras
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);//se convierte la primera letra a mayuscula y se le agrega el resto de letras
    }
    return names.join(" ");//se junta el arreglo de nombres
  }
}
