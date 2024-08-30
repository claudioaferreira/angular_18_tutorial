import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/class/Client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + 'GetAllClients')
  }



  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + 'AddUpdateClient', obj)
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + 'DeleteEmployeeByEmpId?empId=' + id)
  }

  /* *-*-*-*-*-*-*-*-*- */

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + 'GetAllEmployee')

  }

  AddUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + 'AddUpdateClientProject', obj)
  }

  GetAllClientProjects():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClientProjects")
  }

  deleteClfientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + 'DeleteEmployeeByEmpId?empId=' + id)
  }

}
