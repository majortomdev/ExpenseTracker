import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {


  private getUrl: string = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map((response: any) => response)
    )
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.getUrl, expense);
  }



}
