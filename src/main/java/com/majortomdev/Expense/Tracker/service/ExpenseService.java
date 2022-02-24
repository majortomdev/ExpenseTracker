package com.majortomdev.Expense.Tracker.service;

import java.util.List;

import com.majortomdev.Expense.Tracker.model.Expense;

public interface ExpenseService {

	List<Expense> findAll();
	
	Expense save(Expense expense);
	
	Expense findById(Long id);
	
	void delete(Long id);
}
