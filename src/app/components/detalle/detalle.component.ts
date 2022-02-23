import { Component, Input, OnInit } from '@angular/core';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: number;

  constructor(private ropaService: RopaService) {}

  ngOnInit() {
    this.ropaService.getRopaDetalle(this.id).subscribe(resp => {
      console.log(resp);
    });
  }
}
