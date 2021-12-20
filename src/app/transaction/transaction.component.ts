import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TransactionService} from "./transaction-service";
import {TransactionResponse} from "./model/transaction-response";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {

  processedTransactions: TransactionResponse[] = [];

  transactionForm = this.formBuilder.group({
    amount: '',
    sourceAccountNumber: '',
    destinationAccountNumber: ''
  });


  constructor(private formBuilder: FormBuilder, private transactionService:TransactionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.transactionService.createTransaction(this.transactionForm.value).subscribe(response => {
      console.log(response);
    })
  }

  loadAllProcessedTransactions() {
    this.transactionService.loadProcessedTransactions().subscribe(transactions => {
      this.processedTransactions = transactions;
    })
  }

}
