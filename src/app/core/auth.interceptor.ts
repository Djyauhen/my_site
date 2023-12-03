import {Injectable} from "@angular/core";
import {Router} from "express";
import {LoaderService} from "../shared/services/loader.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, finalize, Observable, throwError} from "rxjs";

@Injectable()

export class AuthInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(req)
      .pipe(
        finalize(() => this.loaderService.hide())
      )
  }

  // handle401Error(req: HttpRequest<any>, next: HttpHandler) {
  //   return this.authService.refresh()
  //     .pipe(
  //       switchMap((result: DefaultResponseType | LoginResponseType) => {
  //         let error = '';
  //         if ((result as DefaultResponseType) !== undefined) {
  //           error = (result as DefaultResponseType).message;
  //         }
  //
  //         const refreshResult = result as LoginResponseType;
  //         if (!refreshResult.accessToken || !refreshResult.refreshToken || !refreshResult.userId) {
  //           error = 'Ошибка авторизации';
  //         }
  //
  //         if (error) {
  //           return throwError(() => error);
  //         }
  //
  //         this.authService.setTokens(refreshResult.accessToken, refreshResult.refreshToken);
  //
  //
  //         const authReq = req.clone({
  //           headers: req.headers.set('x-access-token', refreshResult.accessToken)
  //         });
  //
  //         return next.handle(authReq);
  //       }),
  //       catchError((error) => {
  //         this.authService.removeTokens();
  //         this.router.navigate(['/']);
  //         return throwError(error)
  //       })
  //     )
  // }
}

