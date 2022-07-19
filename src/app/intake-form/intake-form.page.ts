import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.page.html',
  styleUrls: ['./intake-form.page.scss'],
})
export class IntakeFormPage implements OnInit {
   public form = [
      { val: '  Visualization Training/Event ( Augmented, Mixed or Virtual Reality Based)', isChecked: true },
      { val: '  Clinical Simulation Training/Event (Task Trainer & Manikin Based)', isChecked: true },
      { val: '  Human Simulation Training/Event ( SP, Standardized Patient Based)', isChecked: true },
      { val: '  Surgical Simulation Training/Event (Fresh tissue, Simulators)', isChecked: true },
      { val: '  Educational Research', isChecked: true },
      { val: '  Tour or Demo', isChecked: true },
      { val: '  Other', isChecked: true }
    ];

  constructor() { }


  ngOnInit() {
  }

}
