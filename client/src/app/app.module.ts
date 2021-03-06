import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {mainStoreReducer} from "./state-management/reducers/main-reducer";
import {StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		StoreModule.forRoot({
			mainStoreReducer
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
