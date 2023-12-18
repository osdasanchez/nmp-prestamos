import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MetalService} from "../../services/metal.service";
import {AuthService} from "../../services/auth.service";
import {Material} from "../../model/material";
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-metal',
  standalone: true,
  imports: [
    FormsModule, AsyncPipe, CommonModule
  ],
  templateUrl: './metal.component.html',
  styleUrl: './metal.component.sass'
})
export class MetalComponent implements OnInit {

  material: Material[];
  selectedValue: Material | null;
  gramaje: any;
  prestamo: any;
  items = [
    {id: "id1", content: []},
    {id: "id2", content: []},
  ]

  constructor(private metalService: MetalService,
              private tokenService: AuthService) {
    /*    this.material = [
          {
            id: 1,
            material: {
              name: "oro",
              price: 1000,
            },
          }
        ];*/
    this.material = [];
    this.selectedValue = null;
    this.gramaje = null;
  }


  ngOnInit() {
    this.getToken();
    this.getMetales();
  }

  onSubmit(): void {
    console.log('onSubmit');
    console.log('selectedValue', this.selectedValue);
    console.log('gramaje', this.gramaje);
    this.getMontoPrestamo();
  }

  private getMontoPrestamo(): void {
    if (this.isNotNullInputs()) {
      // @ts-ignore
      let avaluo = this.selectedValue.material.price * this.gramaje;
      this.prestamo = avaluo * 0.8;
      console.log("prestamo", this.prestamo);
    }

  }

  private isNotNullInputs(): boolean {
    return this.selectedValue !== null && this.gramaje !== null;
  }

  private getToken(): void {
    const token = localStorage.getItem('token_simulador');
    //const token =  null
    //console.log("token",token);
    if (token === null) {
      this.tokenService.getToken().subscribe(
        (response: any) => {
          console.log("response", response.access_token);
          localStorage.setItem('token_simulador', response.access_token)
        },
        (error: any) => {
          localStorage.removeItem('token_simulador');
          console.error(error);
        }
      );
    }
  }

  private getMetales(): void {
    const token = localStorage.getItem('token_simulador')
    //console.log("token", token);
    if (token !== null) {
      this.metalService.getMetales(token).subscribe(
        (response: any) => {
          this.material = response;
          console.log("response ", this.material);
        },
        (error: any) => {
          localStorage.removeItem('token_simulador');
          console.error(error);
        }
      );
    }
  }
}
