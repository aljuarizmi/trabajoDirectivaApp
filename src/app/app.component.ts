import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:object[];
  constructor(){
    this.entradas=[
      {cabecera:"Phyton cada día más presente"},
      {cabecera:"Java presente desde hace más de veinte años"},
      {cabecera:"Javascript cada vez más funcional"},
      {cabecera:"Kotlin, potencia para tus apps"},
      {cabecera:"¿Dónde quedó pascal?"},
    ]
  };
  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito";
  }
}
