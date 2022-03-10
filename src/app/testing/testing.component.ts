import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';

import { ArcadiaComponent } from '../campus/arcadia/arcadia.component';
import { ArtsComponent } from '../campus/arts/arts.component';
import { EmalahleniComponent } from '../campus/emalahleni/emalahleni.component';
import { MbombelaComponent } from '../campus/mbombela/mbombela.component';
import { PlkComponent } from '../campus/plk/plk.component';
import { PtaComponent } from '../campus/pta/pta.component';
import { RankuwaComponent } from '../campus/rankuwa/rankuwa.component';
import { SoshNorthComponent } from '../campus/sosh-north/sosh-north.component';
import { SoshSouthComponent } from '../campus/sosh-south/sosh-south.component';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  campusComponent: any;

  selectedValue!: string;
 
  foods: Food[] = [
    {value: 'arcadia', viewValue: 'Arcadia'},
    {value: '', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  selectedOption: any; 
  options = [
    { campus: "Arcadia", component: "arcadia", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193608.30501934033!2d27.991585828177655!3d-25.6213319067973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95621c9c7f5eb5%3A0x18ee995aaa96adda!2sTUT%20Arcadia!5e0!3m2!1sen!2sza!4v1643188613771!5m2!1sen!2sza"},
    { campus: "Arts", component: "arts"},
    { campus: "Emalahleni", component: "emalahleni"},
    { campus: "Ga-Rankuwa", component: "garankuwa"},
    { campus: "Mbombela", component: "mbombela"},
    { campus: "Polokwane", component: "polokwane"},
    { campus: "Pretoria", component: "pretoria"},
    { campus: "Soshanguve South", component: "sosh-south"},
    { campus: "Soshanguve North", component: "sosh-north"},
  ];
  


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  assignComponent(component: string) {
    if (component === "arcadia") this.campusComponent = ArcadiaComponent;
    else if (component === "arts") this.campusComponent = ArtsComponent;
    else if (component === "emalahleni") this.campusComponent = EmalahleniComponent;
    else if (component === "garankuwa") this.campusComponent = RankuwaComponent;
    else if (component === "mbombela") this.campusComponent = MbombelaComponent;
    else if (component === "polokwane") this.campusComponent = PlkComponent;
    else if (component === "pretoria") this.campusComponent = PtaComponent;
    else if (component === "sosh-south") this.campusComponent = SoshSouthComponent;
    else this.campusComponent = SoshNorthComponent;
  }

  public onValueChanged(selected: any): void {
    this.selectedOption = selected;
    
    console.log(this.selectedOption); // should display the selected option.
  }

}


