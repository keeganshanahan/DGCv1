import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'path';

@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.page.html',
  styleUrls: ['./intake-form.page.scss'],
})
export class IntakeFormPage {
   public form = [
      { val: '  Visualization Training/Event ( Augmented, Mixed or Virtual Reality Based)', isChecked: true },
      { val: '  Clinical Simulation Training/Event (Task Trainer & Manikin Based)', isChecked: true },
      { val: '  Human Simulation Training/Event ( SP, Standardized Patient Based)', isChecked: true },
      { val: '  Surgical Simulation Training/Event (Fresh tissue, Simulators)', isChecked: true },
      { val: '  Educational Research', isChecked: true },
      { val: '  Tour or Demo', isChecked: true },
      { val: '  Other', isChecked: true }
    ];
  inputVal1: string
  db: any;
  
submit() {
  window.location.reload()
  const collectionRef = this.db.collection('Info')
  collectionRef
  .doc()
  .set({ Text: this.inputVal1})

}


  constructor(private route: Router) {}
  cancel() {
    this.route.navigate(['/home']);
  }
  


}
