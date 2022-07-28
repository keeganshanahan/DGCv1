import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { format } from 'path';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.page.html',
  styleUrls: ['./intake-form.page.scss'],
})
export class IntakeFormPage {
  
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
 inputValPreviousDiscussion: boolean=true
 inputValDiscussion: string = ""
 inputValRecurringVisit: boolean=true
  

 constructor(private route: Router, private storage: AngularFireStorage, private db: AngularFirestore) {}



  submit() {
    // window.location.reload()
    const collectionRef = this.db.collection('Info')
    collectionRef
    .doc()
    .set({ Name: this.inputValName, 
      Number: this.inputValNumber, 
      EmailAddress: this.inputValAddress, 
      Title: this.inputValTitle,
      Visualization: this.inputVal1,
      ClinicalSimulation: this.inputVal2,
      HumanSimulation: this.inputVal3,
      SurgicalSimulation: this.inputVal4,
      EducationalResearch: this.inputVal5,
      TourOrDemo: this.inputVal6,
      Other: this.inputVal7,
      PreviousDiscussion: this.inputValPreviousDiscussion,
      WhoDidTheyDiscussWith: this.inputValDiscussion,
      ReccuringVisit: this.inputValRecurringVisit 
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
