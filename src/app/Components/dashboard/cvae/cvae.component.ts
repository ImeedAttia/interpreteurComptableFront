import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../Models/users";
import {UserService} from "../../../Services/user.service";
import {TvaService} from "../../../Services/tva.service";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {CvaeService} from "../../../Services/cvae.service";
import {Cvae} from "../../../Models/Cvae";

@Component({
  selector: 'app-cvae',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    FormsModule,
    NgIf
  ],
  templateUrl: './cvae.component.html',
  styleUrl: './cvae.component.css'
})
export class CvaeComponent {

  cvae: Cvae= new Cvae()

  constructor(private caveService: CvaeService) {
    caveService.getAll().subscribe((data) => {
        this.cvae = data[0];
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  @ViewChild('containercvae') content!: ElementRef;

  public SavePDFCVAE(): void {
    var data = document.getElementById('containercvae');
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
        pdf.save('CVAERapport.pdf'); // Generated PDF
      });
    }
  }
  editMode: boolean = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
