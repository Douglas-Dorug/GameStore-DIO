import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { GamestoreAppComponent } from './components/gamestore-app/gamestore-app.component';
import { FiltersComponent } from './components/gamestore-app/filters/filters.component';
import { ProductListComponent } from './components/gamestore-app/product-list/product-list.component';
import { ProductctItemComponent } from './components/gamestore-app/product-list/productct-item/productct-item.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './components/gamestore-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GamestoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductctItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
