export interface TransactionResponse {
  transactionId: string,
  amount: number,
  sourceAccountNumber: string,
  destinationAccountNumber: string,
  creationTime: string,
  processingTime: string,
  createdBy: string,
  processed: boolean
}
