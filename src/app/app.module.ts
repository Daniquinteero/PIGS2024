import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MainPageComponent} from "./pages/principal/main-page/main-page.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoginComponent} from "./pages/login/login.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductContainerComponent} from "./pages/principal/main-page/product-container/product-container.component";
import {ProductSectionComponent} from "./pages/principal/main-page/product-section/product-section.component";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";
import { environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { ProductComponent } from './components/product/product.component';

import { UserDialogAccountComponent } from './pages/user-dialog-account/user-dialog-account.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyDataComponent } from './pages/user-profile/my-data/my-data.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { PortfoliosComponent } from './pages/user-profile/portfolios/portfolios.component';
import { PortfolioListComponent } from './pages/portfolio-list/portfolio-list.component';
import { SecurePurgeDialogComponent } from './pages/user-profile/my-data/secure-purge-dialog/secure-purge-dialog.component';
import { ProductChartComponent } from './components/product-chart/product-chart.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:MainPageComponent},
  {path: 'search', component:SearchResultComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'result', component:SearchResultComponent},
  {path: 'userProfile', component:UserProfileComponent, children: [
      {path:'MyData', component: MyDataComponent},
      {path:'MyPortfolio', component: PortfoliosComponent}
    ]}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    MainPageComponent,
    ProductContainerComponent,
    ProductSectionComponent,
    SearchBarComponent,
    SearchResultComponent,
    ProductComponent,
    SearchResultComponent,
    UserDialogAccountComponent,
    UserProfileComponent,
    RegisterComponent,
    MyDataComponent,
    SearchResultComponent,
    PortfolioViewComponent,
    PortfoliosComponent,
    PortfolioListComponent,
    SecurePurgeDialogComponent,
    ProductChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
