import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { format } from 'path';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UserServiceService } from '../user-service.service';
import { getAdditionalUserInfo } from 'firebase/auth';

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
  inputVal1: boolean = false
 inputVal2: boolean=false
 inputVal3: boolean=false
 inputVal4: boolean=false
 inputVal5: boolean=false
 inputVal6: boolean=false
 inputVal7: boolean=false
 inputValNumberofParticipants: string = ""
 inputValPreviousDiscussion: boolean=false
 inputValDiscussion: string = ""
 inputValRecurringVisit: boolean=false
  inputValRecurringDate: string = ""
  inputValOtherSchedulers: string = ""
  inputValQuestions: string = ""
  inputValPlannedMaterials: string = ""
  inputValNeededMaterials: string = ""
  inputValAccessibility: string = ""
  userID: string = ""


 constructor(private route: Router, private storage: AngularFireStorage, private db: AngularFirestore, private userService: UserServiceService) {}



  async submit() {
    // window.location.reload()
    const collectionRef = this.db.collection('Info')
    var uid = await this.userService.getUser().then(uid => {


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
      ReccuringVisit: this.inputValRecurringVisit,
      NumberOfParticipants: this.inputValNumberofParticipants,
      RecurringDate: this.inputValRecurringDate,
      OtherSchedulers: this.inputValOtherSchedulers,
      Questions: this.inputValQuestions,
      BroughtMaterials: this.inputValPlannedMaterials,
      NeededMaterials: this.inputValNeededMaterials,
      AccessibilityNeeds: this.inputValAccessibility,
      userID: uid
      


  }).catch(err => {
      console.log(err)
    })
    })
    
    
  
  }
  cancel() {
    this.route.navigate(['/dashboard']);
  }
  calendar() {
    this.route.navigate(['/calendar'])
  }

  save() {
    this.route.navigate(['/dashboard'])
  }
  


}
