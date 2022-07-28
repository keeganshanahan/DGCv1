import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
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
  inputValName: string = ""
  inputValNumber: string = ""
  inputValAddress: string = ""
  inputValTitle: string = ""
  inputVal1: boolean = true;
 inputVal2: boolean=true
 inputVal3: boolean=true
 inputVal4: boolean=true
 inputVal5: boolean=true
 inputVal6: boolean=true
 inputVal7: boolean=true
  



  constructor(private route: Router, public db: AngularFirestore) {}

  submit() {
    // window.location.reload()
    const collectionRef = this.db.collection('Info')
    collectionRef
    .doc()
    .set({ Name: this.inputValName, 
      Number: this.inputValNumber, 
      Address: this.inputValAddress, 
      Title: this.inputValTitle,
      Visualization: this.inputVal1,
      ClinicalSimulation: this.inputVal2,
      HumanSimulation: this.inputVal3,
      SurgicalSimulation: this.inputVal4,
      EducationalResearch: this.inputVal5,
      TourOrDemo: this.inputVal6,
      Other: this.inputVal7
  }).catch(err => {
      console.log(err)
    })
  
  }
  cancel() {
    this.route.navigate(['/home']);
  }
  calendar() {
    this.route.navigate(['/calendar'])
  }

  save() {
    this.route.navigate(['/dashboard'])
  }
  


}
