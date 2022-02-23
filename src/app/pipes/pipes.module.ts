import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [DomSanitizerPipe, ImagenPipe, ParesPipe],
  exports: [DomSanitizerPipe, ImagenPipe, ParesPipe],
})
export class PipesModule {}
