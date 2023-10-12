import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {
      titular: 'Luis Corales',
      numeroTarjeta: '5462315555255',
      fechaExpiracion: '11/27',
      cvv: '123'
    },
    {
      titular: 'Juan Corales',
      numeroTarjeta: '7562315555255',
      fechaExpiracion: '11/26',
      cvv: '321'
    }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  ngOnInit(): void {    
  }

  agregarTarjeta(){
    console.log(this.form);    
    const tarjeta = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listTarjetas.push(tarjeta);
    this.form.reset();      
  }
}
