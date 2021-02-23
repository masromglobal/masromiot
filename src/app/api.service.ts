import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "https://iotdev.purchesaing.com/api/v1/ ";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 public url:string= 'http://localhost/IoTdev/json.php'

  log: any;
  filterLocation: any;




  constructor(private httpclient: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response){
    let body = res;
    return body || { };
  }

  getcompanydata(): Observable<Location[]> {
    return this.httpclient.get<Location[]> (this.url)


  }

  filtercompanydata(searchTerm) {
    return this.filterLocation.filter(companydata => {
      return companydata.CompanyName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  }
