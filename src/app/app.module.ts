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

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:MainPageComponent},
  {path: 'result', component:SearchResultComponent}
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
    SearchResultComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterOutlet, RouterModule.forRoot(routes), CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
