import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TestingComponent } from './testing/testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { CookieModule } from 'ngx-cookie';

/* Angular Material */
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
/* --------------------- Version 2 -------------------------- */
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { environment } from 'src/environments/environment';
import { EventEmitterService } from './_services/event-emitter.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { SoshSouthComponent } from './campus/sosh-south/sosh-south.component';
import { SoshNorthComponent } from './campus/sosh-north/sosh-north.component';
import { MbombelaComponent } from './campus/mbombela/mbombela.component';
import { PlkComponent } from './campus/plk/plk.component';
import { ArcadiaComponent } from './campus/arcadia/arcadia.component';
import { ArtsComponent } from './campus/arts/arts.component';
import { RankuwaComponent } from './campus/rankuwa/rankuwa.component';
import { EmalahleniComponent } from './campus/emalahleni/emalahleni.component';
import { HumanitiesComponent } from './faculty/humanities/humanities.component';
import { PtaComponent} from './campus/pta/pta.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultCampusComponent } from './campus/default-campus/default-campus.component';
import { ModalDeanComponent } from './modal/modals-ict/modal-dean/modal-dean.component';
import { ModalCompscienceComponent } from './modal/modals-ict/modal-compscience/modal-compscience.component';
import { ModalCompsystemComponent } from './modal/modals-ict/modal-compsystem/modal-compsystem.component';
import { ModalInformaticsComponent } from './modal/modals-ict/modal-informatics/modal-informatics.component';
import { ModalFandfComponent } from './modal/modals-ict/modal-fandf/modal-fandf.component';
import { BlogComponent } from './blog/blog.component';
import { ScienceComponent } from './faculty/science/science.component';
import { EconomicsComponent } from './faculty/economics/economics.component';
import { EngineeringComponent } from './faculty/engineering/engineering.component';
import { ManagementComponent } from './faculty/management/management.component';
import { ItComponent } from './modal/modals-ict/it/it.component';
import { ClinicComponent } from './modal/clinic/clinic.component';
import { SdsComponent } from './modal/sds/sds.component';
import { CurriculmDevComponent } from './modal/curriculm-dev/curriculm-dev.component';
import { OmbudsmanComponent } from './modal/ombudsman/ombudsman.component';
import { FoartsComponent } from './faculty/foarts/foarts.component';
import { IctPlkComponent } from './faculty/ict-plk/ict-plk.component';
import { IctEmalahleniComponent } from './faculty/ict-emalahleni/ict-emalahleni.component';
import { EmalahleniIctComponent } from './modal/modals-ict/emalahleni-ict/emalahleni-ict.component';
import { PlkIctComponent } from './modal/modals-ict/plk-ict/plk-ict.component';
import { SciencePtaComponent } from './faculty/science-pta/science-pta.component';
import { EngineeringEmalahleniComponent } from './faculty/engineering-emalahleni/engineering-emalahleni.component';
import { HumanitiesNorthComponent } from './faculty/humanities-north/humanities-north.component';
import { HumanitiesPlkComponent } from './faculty/humanities-plk/humanities-plk.component';
import { ManagementEmalahleniComponent } from './faculty/management-emalahleni/management-emalahleni.component';
import { HumanitiesEmalahleniComponent } from './faculty/humanities-emalahleni/humanities-emalahleni.component';
import { MbombelaHumanitiesComponent } from './faculty/mbombela-humanities/mbombela-humanities.component';
import { MbombelaManScienceComponent } from './faculty/mbombela-man-science/mbombela-man-science.component';
import { ManSciencePlkComponent } from './faculty/man-science-plk/man-science-plk.component';
import { EconomicsMbombelaComponent } from './faculty/economics-mbombela/economics-mbombela.component';
import { EconomicsPlkComponent } from './faculty/economics-plk/economics-plk.component';
import { RegisterComponent } from './student/register/register.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { IndexComponent } from './admin/index/index.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { UpdateComponent } from './admin/update/update.component';
import {  Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { SurveyResponsesComponent } from './admin/survey-responses/survey-responses.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { UnHeaderComponent } from './un-header/un-header.component';
import { VarifyEmailComponent } from './student/varify-email/varify-email.component';


/*--------------- Surveys ----------------*/
import { ArtsSurveyComponent } from './survey/arts-survey/arts-survey.component';
import { EconomicsSurveyComponent } from './survey/economics-survey/economics-survey.component';
import { EconomicsMbombelaSurveyComponent } from './survey/economics-mbombela-survey/economics-mbombela-survey.component';
import { EconomicsPlkSurveyComponent } from './survey/economics-plk-survey/economics-plk-survey.component';
import { EngineeringSurveyComponent } from './survey/engineering-survey/engineering-survey.component';
import { EngineeringEmalahleniSurveyComponent } from './survey/engineering-emalahleni-survey/engineering-emalahleni-survey.component';
import { FoartsSurveyComponent } from './survey/foarts-survey/foarts-survey.component';
import { HumanitiesSurveyComponent } from './survey/humanities-survey/humanities-survey.component';
import { HumanitiesEmalahleniSurveyComponent } from './survey/humanities-emalahleni-survey/humanities-emalahleni-survey.component';
import { HumanitiesNorthSurveyComponent } from './survey/humanities-north-survey/humanities-north-survey.component';
import { HumanitiesPlkSurveyComponent } from './survey/humanities-plk-survey/humanities-plk-survey.component';
import { IctEmalahleniSurveyComponent } from './survey/ict-emalahleni-survey/ict-emalahleni-survey.component';
import { IctPlkSurveyComponent } from './survey/ict-plk-survey/ict-plk-survey.component';
import { ManSciencePlkSurveyComponent } from './survey/man-science-plk-survey/man-science-plk-survey.component';
import { ManagementSurveyComponent } from './survey/management-survey/management-survey.component';
import { ManagementEmalahleniSurveyComponent } from './survey/management-emalahleni-survey/management-emalahleni-survey.component';
import { MbombelaHumanitiesSurveyComponent } from './survey/mbombela-humanities-survey/mbombela-humanities-survey.component';
import { MbombelaManScienceSurveyComponent } from './survey/mbombela-man-science-survey/mbombela-man-science-survey.component';
import { ScienceSurveyComponent } from './survey/science-survey/science-survey.component';
import { SciencePtaSurveyComponent } from './survey/science-pta-survey/science-pta-survey.component';
import { IctSurveyComponent } from './survey/ict-survey/ict-survey.component';
import { StoreModule } from '@ngrx/store';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ForgottenComponent } from './student/forgotten/forgotten/forgotten.component';
import { ToastComponent } from './system/toast/toast.component';



@NgModule({
  declarations: [
    AppComponent,
    CampusComponent,
    HomeComponent,
    FacultyComponent,
    TestingComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    SoshSouthComponent,
    SoshNorthComponent,
    MbombelaComponent,
    PlkComponent,
    ArcadiaComponent,
    ArtsComponent,
    RankuwaComponent,
    EmalahleniComponent,
    HumanitiesComponent,
    PtaComponent,
    ModalComponent,
    DefaultCampusComponent,
    ModalDeanComponent,
    ModalCompscienceComponent,
    ModalCompsystemComponent,
    ModalInformaticsComponent,
    ModalFandfComponent,
    BlogComponent,
    ScienceComponent,
    EconomicsComponent,
    EngineeringComponent,
    ManagementComponent,
    ItComponent,
    ClinicComponent,
    SdsComponent,
    CurriculmDevComponent,
    OmbudsmanComponent,
    FoartsComponent,
    IctPlkComponent,
    IctEmalahleniComponent,
    EmalahleniIctComponent,
    PlkIctComponent,
    SciencePtaComponent,
    EngineeringEmalahleniComponent,
    HumanitiesNorthComponent,
    HumanitiesPlkComponent,
    ManagementEmalahleniComponent,
    HumanitiesEmalahleniComponent,
    MbombelaHumanitiesComponent,
    MbombelaManScienceComponent,
    ManSciencePlkComponent,
    EconomicsMbombelaComponent,
    EconomicsPlkComponent,
    RegisterComponent,
    SignInComponent,
    DashboardComponent,
    IndexComponent,
    SidebarComponent,
    TopbarComponent,
    UpdateComponent,
    SurveyResponsesComponent,
    AdminLoginComponent,
    UnHeaderComponent,
    VarifyEmailComponent,
    UnHeaderComponent,
    ArtsSurveyComponent,
    EconomicsSurveyComponent,
    EconomicsMbombelaSurveyComponent,
    EconomicsPlkSurveyComponent,
    EngineeringSurveyComponent,
    EngineeringEmalahleniSurveyComponent,
    FoartsSurveyComponent,
    HumanitiesSurveyComponent,
    HumanitiesEmalahleniSurveyComponent,
    HumanitiesNorthSurveyComponent,
    HumanitiesPlkSurveyComponent,
    IctEmalahleniSurveyComponent,
    IctPlkSurveyComponent,
    ManSciencePlkSurveyComponent,
    ManagementSurveyComponent,
    ManagementEmalahleniSurveyComponent,
    MbombelaHumanitiesSurveyComponent,
    MbombelaManScienceSurveyComponent,
    ScienceSurveyComponent,
    SciencePtaSurveyComponent,
    IctSurveyComponent,
    ForgottenComponent,
    ToastComponent

  ],
  imports: [
    BrowserModule,
    //SlideshowModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
     FontAwesomeModule,
     AngularFirestoreModule,
     StoreModule.forRoot({}, {}),
     MdbAccordionModule,
     MdbCarouselModule,
     MdbCheckboxModule,
     MdbCollapseModule,
     MdbDropdownModule,
     MdbFormsModule,
     MdbModalModule,
     MdbPopoverModule,
     MdbRadioModule,
     MdbRangeModule,
     MdbRippleModule,
     MdbScrollspyModule,
     MdbTabsModule,
     MdbTooltipModule,
     MdbValidationModule,
     CookieModule.forRoot(),
 
    
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [FirebaseService, EventEmitterService,ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
