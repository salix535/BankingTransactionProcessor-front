import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TransactionRequest} from "./model/transaction-request";
import {Observable} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";
import {TransactionResponse} from "./model/transaction-response";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient, private oAuthService: OAuthService) {
  }

  public createTransaction(transactionRequest: TransactionRequest): Observable<void> {
    return this.http.post<void>('https://xihw1mamne.execute-api.eu-central-1.amazonaws.com/transactions', transactionRequest, {
      headers: {
        'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
      }
    });
  }

  public loadProcessedTransactions(): Observable<TransactionResponse[]> {
    return this.http.get<TransactionResponse[]>('https://xihw1mamne.execute-api.eu-central-1.amazonaws.com/transactions', {
      headers: {
        'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
      }
    });
  }
}
