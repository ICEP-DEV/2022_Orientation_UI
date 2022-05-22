//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Inject, Injectable, Optional, PLATFORM_ID  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { DeviceDetectorService } from 'ngx-device-detector';

//Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Student Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogComponent } from './blog/blog.component';
import { ForgottenComponent } from './student/forgotten/forgotten.component';
import { RegisterComponent } from './student/register/register.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Administration Components
import { IndexComponent } from './admin/index/index.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SurveyResponsesComponent } from './admin/survey-responses/survey-responses.component';
import { ModifyvideosComponent,DialogOverviewExampleDialog } from './admin/bottomtop/modifyvideos/modifyvideos.component';
import { ModifyblogsComponent,DialogOverviewEditBlog } from './admin/bottomtop/modifyblogs/modifyblogs.component';

//Mdb 5 Matirials 
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

/* Angular Material */
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { UploadContentComponent } from './admin/sideTabs/upload-content/upload-content.component';
import { TrackingStComponent } from './admin/sideTabs/tracking-st/tracking-st.component';
import { GeneratedReportComponent } from './admin/sideTabs/generated-report/generated-report.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MapdirComponent } from './student/mapdir/mapdir.component';
import { AgmCoreModule } from '@agm/core';
import { MeeteamComponent } from './student/meeteam/meeteam.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchComponent } from './admin/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    CampusComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    BlogComponent,
    RegisterComponent,
    SignInComponent,
    DashboardComponent,
    IndexComponent,
    SidebarComponent,
    TopbarComponent,
    AdminLoginComponent,
    ForgottenComponent,
    SurveyResponsesComponent,
    UploadContentComponent,
    TrackingStComponent,
    GeneratedReportComponent,
    MapdirComponent,
    MeeteamComponent,
    ModifyvideosComponent,
    DialogOverviewExampleDialog,
    SearchComponent,
    ModifyblogsComponent,
    DialogOverviewEditBlog
  ],
  imports: [
    BrowserModule,
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
    MatButtonToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatBottomSheetModule,
    FontAwesomeModule,
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
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableFilterModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcGre3D-n-tmHa4UuaYaihYxS9ATuvgmQ'
    })
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [CookieService,{provide: DeviceDetectorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
