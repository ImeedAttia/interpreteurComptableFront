import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Tva } from "../../../Models/Tva";
import { TvaService } from "../../../Services/tva.service";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { JsonPipe, NgForOf } from "@angular/common";

@Component({
  selector: 'app-tva',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']  // Corrected to styleUrls and should be an array
})
export class TvaComponent {
  tva!: Tva;

  constructor(private tvaService: TvaService) {
    tvaService.getAll().subscribe((data: Tva) => {
        this.tva = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  @ViewChild('containertva') containerTva!: ElementRef;

  saveTva(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let file = element.files ? element.files[0] : null;
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.tvaService.generatePDF(formData, this.tva.id).subscribe((response: Blob) => {
        const url = window.URL.createObjectURL(response);
        window.open(url, '_blank');
        window.location.reload();
      }, (error) => {
        console.error('Error generating PDF:', error);
        alert('Wrong file format. Please upload a PDF file.');
      });
    }
  }

  generatePDF(): void {
    this.tvaService.Create(this.tva).subscribe((data) => {
      console.log("TVA created or updated");
    }, (error) => {
      console.error("Error saving TVA:", error);
    });
  }
}
