import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsListModule } from './pages/products-list/products-list.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, SearchBarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
    MatInputModule,
    ProductsListModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
