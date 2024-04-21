import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../Models/users";
import {UserService} from "../../../Services/user.service";
import {TvaService} from "../../../Services/tva.service";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {JsonPipe, NgForOf} from "@angular/common";
import {Tva} from "../../../Models/Tva";

@Component({
  selector: 'app-tva',
  standalone: true,
    imports: [
      NgForOf,
      JsonPipe,
      FormsModule
    ],
  templateUrl: './tva.component.html',
  styleUrl: './tva.component.css'
})
export class TvaComponent {
  tva!: Tva;

  constructor(private tvaService: TvaService) {
    tvaService.getAll().subscribe((data) => {
        this.tva = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  @ViewChild('containertva') content!: ElementRef;

  public SavePDFTVA(): void {
    var data = document.getElementById('containertva');
    if (data != null) {
      html2canvas(data).then((canvas) => {
        // Quelques options nécessaires
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('TVARapport.pdf'); // Generated PDF
      });
    }
  }
}
