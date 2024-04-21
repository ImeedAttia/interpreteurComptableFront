import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgForOf} from "@angular/common";
import {User} from "../../../Models/users";
import {UserService} from "../../../Services/user.service";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {TvaService} from "../../../Services/tva.service";
import {CfeService} from "../../../Services/cfe.service";
import {Cfe} from "../../../Models/Cfe";

@Component({
  selector: 'app-cfe',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './cfe.component.html',
  styleUrl: './cfe.component.css'
})
export class CfeComponent {
  cfe!: Cfe;

  constructor(private cfeService: CfeService) {

    cfeService.getAll().subscribe((data) => {
        this.cfe = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  @ViewChild('content-cfe') content!: ElementRef;
  public SavePDF(): void {
    var data = document.getElementById('content-cfe');
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
        pdf.save('CfeRapport.pdf'); // Generated PDF
      });
    }
  }
}
