// À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject,  } from "rxjs";
import {PlansRepas} from "../../../../common/tables/PlansRepas"

@Injectable()
export class CommunicationService {
  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private readonly http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }

  getAllPlans(){
    return this.http.
    get<PlansRepas[]>(`${this.BASE_URL}/plansrepas`)
    .pipe(
      catchError(this.handleError<void>('get')));
  }

  getSuppliers(){
    return this.http.
    get<PlansRepas[]>(`${this.BASE_URL}/fournisseurs`)
    .pipe(
      catchError(this.handleError<void>('get')));
  }

  insertPlan(planRepas : PlansRepas) {
    return this.http
    .post<{}>(
        `${this.BASE_URL}/insert`,
        {
          planRepas : planRepas
        },
        { observe: 'response' },
    )
    .pipe(
      catchError(this.handleError<void>('insert')))
  }

  updatePlan(planRepas : PlansRepas) {
    return this.http
    .patch<{}>(
        `${this.BASE_URL}/insert`,
        {
          planRepas : planRepas
        },
        { observe: 'response' },
    )
    .pipe(
        catchError(this.handleError<void>('update')))
  }

  deletePlan(planNumber : string) {
    return this.http
    .delete<{}>(
      `${this.BASE_URL}/options`,
      {body : {planNumber : planNumber}},
    )
    .pipe(
      catchError(this.handleError<void>('delete')))
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
