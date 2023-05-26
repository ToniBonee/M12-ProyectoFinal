import { Component } from '@angular/core';
import { FormsService } from 'src/services/formServices';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']

})
export class CompraComponent {

  productos: any[] = [];
  stocks: Stock[] = [];
  marcas: Marca[] = [];
  cantidadProductos: number[] = [];

  id_producto: any = "";
  nombre: any = "";
  descripcion: any = "";
  precio: number = 0;
  generacion: any = "";
  imagen: any = "";

  constructor(private formService: FormsService) { }

  ngOnInit(): void {
    this.formService.GetLocalProducts().subscribe((productos: Producto[]) => {
      this.productos = productos;
      this.cantidadProductos = Array(this.productos.length).fill(1);
      this.formService.GetLocalProducts();
    });

    this.formService.GetLocalStocks().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
      this.formService.GetLocalStocks();
    });

    this.formService.GetLocalMarcas().subscribe((marcas: Marca[]) => {
      this.marcas = marcas;
      this.formService.GetLocalMarcas();
    });
  }

  agregarAlCarrito(id_producto: number, cantidad: number) {
    const productoEnCarrito: ProductoEnCarrito = {
      id_producto: id_producto,
      cantidad: cantidad,
      id_cliente: 1, // Valor por defecto del cliente
      fecha_anadido: new Date(),
      fecha_expiracion: new Date()
    };

  }

 

}

export interface Producto { id_producto: number, nombre: string, descripcion: string, precio: number, generacion: string, imagen: String, id_marca: number; }

export interface Stock { id_stock: number, stock: number, id_producto: number, id_tipo_producto: number }

export interface Marca { id_marca: number, nombre: string }

export interface ProductoEnCarrito { id_producto: number, id_cliente: number, fecha_anadido: Date, fecha_expiracion: Date, cantidad: number }