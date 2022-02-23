import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { ExpenseService } from './services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
