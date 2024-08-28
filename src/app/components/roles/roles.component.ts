import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRoles } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  //instancia de HttpClient
  http = inject(HttpClient);

  roleList: IRoles[]=[];
isLoader: boolean = true;
  ngOnInit(): void {

    this.getAllRoles();
  }

  getAllRoles(){
    // This method will return all the roles
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
      this.isLoader = false;
      console.log(this.roleList)
    }, (error: any) => {
      alert('Error al cargar los roles');
      this.isLoader = false;
    });
  }

  presionarBoton(id: number){
    console.log('Se presiono el boton ' + id)
  }



}
