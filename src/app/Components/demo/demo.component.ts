import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from "@angular/common";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  Data = [
    { Id: 101, Name: 'Nitin', Salary: 1234 },
    { Id: 102, Name: 'Sonu', Salary: 1234 },
    { Id: 103, Name: 'Mohit', Salary: 1234 },
    { Id: 104, Name: 'Rahul', Salary: 1234 },
    { Id: 105, Name: 'Kunal', Salary: 1234 }
  ];

  @ViewChild('content') content!: ElementRef;
  public SavePDF(): void {
    var data = document.getElementById('content');
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
        pdf.save('Rapport.pdf'); // Generated PDF
      });
    }
  }
}
