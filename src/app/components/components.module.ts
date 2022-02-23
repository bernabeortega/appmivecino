import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlidesShowParesComponent } from './slides-show-pares/slides-show-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents: [DetalleComponent],
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent,SlidesShowParesComponent, DetalleComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlidesShowParesComponent, DetalleComponent],
})
export class ComponentsModule {}
