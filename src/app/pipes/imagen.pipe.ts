import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

//const URL = 'http://localhost:';
const URL = environment.imgPath;


@Pipe({
  name: 'images'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: 'w500'): string {
    if (!img) {
      return '../../assets/Imagen_no_disponible.svg.png';
    }
    const imgUrl = `${URL}${img}`;
    return imgUrl;
  }

}
