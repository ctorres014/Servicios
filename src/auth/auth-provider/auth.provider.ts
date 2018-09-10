import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


// Almacena en cache cualquier solicitud fallida
@Injectable()
export class AuthProvider {
  cachedRequests: Array<HttpRequest<any>> = [];
  public collectFailedRequest(request): void {
      this.cachedRequests.push(request);
      console.log('CacheRequest', this.cachedRequests);

    }
  public retryFailedRequests(): void {
      // retry the requests. this method can
      // be called after the token is refreshed
    }
}
