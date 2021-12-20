export interface TransactionResponse {
  id: string,
  amount: number,
  sourceAccountNumber: string,
  destinationAccountNumber: string,
  creationTime: string,
  processingTime: string,
  createdBy: string,
  processed: boolean
}
