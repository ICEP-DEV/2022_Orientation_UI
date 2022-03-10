import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampusComponent} from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TestingComponent } from './testing/testing.component';
import {HeaderComponent} from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SoshSouthComponent } from './campus/sosh-south/sosh-south.component';
import { HumanitiesComponent} from './faculty/humanities/humanities.component';
import { BlogComponent } from './blog/blog.component';
import { IctEmalahleniComponent } from './faculty/ict-emalahleni/ict-emalahleni.component';
import { IctPlkComponent } from './faculty/ict-plk/ict-plk.component';


import { ScienceComponent } from './faculty/science/science.component';
import { ManagementComponent} from './faculty/management/management.component';
import { EconomicsComponent } from './faculty/economics/economics.component';
import { EngineeringComponent } from './faculty/engineering/engineering.component';
import { FoartsComponent} from './faculty/foarts/foarts.component';
import { SciencePtaComponent } from './faculty/science-pta/science-pta.component';
import { EngineeringEmalahleniComponent } from './faculty/engineering-emalahleni/engineering-emalahleni.component';
import { HumanitiesPlkComponent  } from './faculty/humanities-plk/humanities-plk.component';
import {HumanitiesNorthComponent  } from './faculty/humanities-north/humanities-north.component';
import { ManagementEmalahleniComponent  } from './faculty/management-emalahleni/management-emalahleni.component';
import {  MbombelaHumanitiesComponent } from './faculty/mbombela-humanities/mbombela-humanities.component';
import { MbombelaManScienceComponent  } from './faculty/mbombela-man-science/mbombela-man-science.component';
import { HumanitiesEmalahleniComponent  } from './faculty/humanities-emalahleni/humanities-emalahleni.component';
import {   ManSciencePlkComponent} from './faculty/man-science-plk/man-science-plk.component';
import { EconomicsMbombelaComponent  } from './faculty/economics-mbombela/economics-mbombela.component';
import { EconomicsPlkComponent  } from './faculty/economics-plk/economics-plk.component';

import { RegisterComponent } from './student/register/register.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { VarifyEmailComponent } from './/student/varify-email/varify-email.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateComponent } from './admin/update/update.component';
import { SurveyResponsesComponent} from './admin/survey-responses/survey-responses.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
/*Surveys*/
import { ArtsSurveyComponent } from './survey/arts-survey/arts-survey.component';
import { EconomicsMbombelaSurveyComponent } from './survey/economics-mbombela-survey/economics-mbombela-survey.component';
import { EconomicsPlkSurveyComponent } from './survey/economics-plk-survey/economics-plk-survey.component';
import { EconomicsSurveyComponent } from './survey/economics-survey/economics-survey.component';
import { EngineeringEmalahleniSurveyComponent } from './survey/engineering-emalahleni-survey/engineering-emalahleni-survey.component';
import { EngineeringSurveyComponent } from './survey/engineering-survey/engineering-survey.component';
import { FoartsSurveyComponent } from './survey/foarts-survey/foarts-survey.component';
import { HumanitiesEmalahleniSurveyComponent } from './survey/humanities-emalahleni-survey/humanities-emalahleni-survey.component';
import { HumanitiesNorthSurveyComponent } from './survey/humanities-north-survey/humanities-north-survey.component';
import { HumanitiesPlkSurveyComponent } from './survey/humanities-plk-survey/humanities-plk-survey.component';
import { HumanitiesSurveyComponent } from './survey/humanities-survey/humanities-survey.component';
import { IctEmalahleniSurveyComponent } from './survey/ict-emalahleni-survey/ict-emalahleni-survey.component';
import { IctPlkSurveyComponent } from './survey/ict-plk-survey/ict-plk-survey.component';
import { ManSciencePlkSurveyComponent } from './survey/man-science-plk-survey/man-science-plk-survey.component';
import { ManagementEmalahleniSurveyComponent } from './survey/management-emalahleni-survey/management-emalahleni-survey.component';
import { ManagementSurveyComponent } from './survey/management-survey/management-survey.component';
import { MbombelaHumanitiesSurveyComponent } from './survey/mbombela-humanities-survey/mbombela-humanities-survey.component';
import { MbombelaManScienceSurveyComponent } from './survey/mbombela-man-science-survey/mbombela-man-science-survey.component';
import { SciencePtaSurveyComponent } from './survey/science-pta-survey/science-pta-survey.component';
import { ScienceSurveyComponent } from './survey/science-survey/science-survey.component';




const routes: Routes = [
  /*
  { path: '', component: LandingComponent},
  { path: 'home', component: HomeComponent},
  { path: 'campus', component: CampusComponent },
  { path: 'faculty', component: FacultyComponent},
  { path: 'testing', component: TestingComponent} */
  { path: '', component: HomeComponent },
  { path: '', component: HeaderComponent,
    children: [
      { path: 'campus', component: CampusComponent},
      { path: 'faculty', component: FacultyComponent},
      { path: 'testing', component: TestingComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'sosh-south', component: SoshSouthComponent},
      { path: 'humanities', component: HumanitiesComponent},
      { path: 'blog', component: BlogComponent},

      /*Faculties */
      { path: 'science', component: ScienceComponent},
      { path: 'man-science', component: ManagementComponent},
      { path: 'economics', component: EconomicsComponent},
      { path: 'engineering', component: EngineeringComponent},
      { path: 'arts', component: FoartsComponent},
      { path: 'emalahleni-ict', component: IctEmalahleniComponent},
      { path: 'plk-ict', component: IctPlkComponent},
      { path: 'science-pta', component: SciencePtaComponent},
      { path: 'humanities-plk', component: HumanitiesPlkComponent},
      { path: 'ehumanities-north', component: HumanitiesNorthComponent},
      { path: 'man-emalahleni', component: ManagementEmalahleniComponent},
      { path: 'eng-emalahleni', component: EngineeringEmalahleniComponent},
      { path: 'humanities-mbombela', component: MbombelaHumanitiesComponent},
      { path: 'man-science-mbombela', component: MbombelaManScienceComponent},
      { path: 'humanities-emalahleni', component: HumanitiesEmalahleniComponent},
      { path: 'man-science-plk', component: ManSciencePlkComponent},
      { path: 'economics-mbombela', component: EconomicsMbombelaComponent},
      { path: 'economics-plk', component: EconomicsPlkComponent},
      //student
      { path: 'student-reg', component: RegisterComponent},
      { path: 'student-login', component: SignInComponent},
      { path: 'verify', component: VarifyEmailComponent},
      // Surveys
      { path: 'arts_surv', component: ArtsSurveyComponent},
      { path: 'econ_mbo_surv', component: EconomicsMbombelaSurveyComponent},
      { path: 'econ_plk_surv', component: EconomicsPlkSurveyComponent},
      { path: 'econ_surv', component: EconomicsSurveyComponent},
      { path: 'engi_ema_surv', component: EngineeringEmalahleniSurveyComponent},
      { path: 'engi_surv', component: EngineeringSurveyComponent},
      { path: 'foarts_surv', component: FoartsSurveyComponent},
      { path: 'hum_ema_surv', component: HumanitiesEmalahleniSurveyComponent},
      { path: 'hum_nor_surv', component: HumanitiesNorthSurveyComponent},
      { path: 'hum_plk_surv', component: HumanitiesPlkSurveyComponent},
      { path: 'hum_surv', component: HumanitiesSurveyComponent},
      { path: 'ict_ema_surv', component: IctEmalahleniSurveyComponent},
      { path: 'ict_plk_surv', component: IctPlkSurveyComponent},
      { path: 'man_sci_plk_surv', component: ManSciencePlkSurveyComponent},
      { path: 'man_ema_surv', component: ManagementEmalahleniSurveyComponent},
      { path: 'man_surv', component: ManagementSurveyComponent},
      { path: 'mbo_hum_surv', component: MbombelaHumanitiesSurveyComponent},
      { path: 'mbo_msn_sci_surv', component: MbombelaManScienceSurveyComponent},
      { path: 'sci_pta_surv', component: SciencePtaSurveyComponent},
      { path: 'sci_surv', component: ScienceSurveyComponent},
    ]
  },

  { path: 'dashboard', component: DashboardComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'survey-data', component: SurveyResponsesComponent},
  { path: 'admin-login', component: AdminLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
