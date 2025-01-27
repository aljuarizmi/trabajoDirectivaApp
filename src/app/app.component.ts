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
  entradas:{titulo:string}[];
  constructor(){
    this.entradas=[
      {titulo:"Phyton cada día más presente"},
      {titulo:"Java presente desde hace más de veinte años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin, potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
    ]
  };
  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito";
  }
}
