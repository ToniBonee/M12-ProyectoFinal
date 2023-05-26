import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService, Producto, Stock, Marca } from 'src/services/formServices';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-infoProducto',
  templateUrl: './infoProducto.component.html',
  styleUrls: ['./infoProducto.component.css']
})
export class infoProducto implements OnInit  {

  producto:any[] = [ ];
  id:any;
  constructor(private formService:FormsService, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.id = +this.route.snapshot.params['id_producto'];
    console.log(this.id);
    this.formService.getProductoById(this.id).subscribe((producto: any) => {
      this.producto = producto;
    });
  }
 
 
}
