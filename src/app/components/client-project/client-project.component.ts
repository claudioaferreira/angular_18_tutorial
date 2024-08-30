import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IEmployee } from '../../model/interface/role';
import { Client, ClientProject } from '../../model/class/Client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  isLoader = signal(true);

  private clientService = inject(ClientService);
  employeeList : IEmployee[] = [];
  clientList : Client[] = [];

  clientProjectObj: ClientProject = new ClientProject();
  clientProjectList : ClientProject[] = [];

  //creamos un objecto form imagina que en este objecto tenemos propiedades
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl("", [Validators.email]),
    clientId: new FormControl("")
  });

  ngOnInit(): void {
    this.loadEmployee();
    this.loadClient();
    this.loadclientProject();
  }

  loadEmployee(){
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
      console.log(res.data);
    })
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
      console.log(res.data);
    })
  }

  loadclientProject(){
    this.clientService.GetAllClientProjects().subscribe((res: APIResponseModel) => {
      this.clientProjectList = res.data;
      this.isLoader.set(false);
    })
  }

  onSaveProject(){
    const formvalue = this.projectForm.value;
    debugger;
    this.clientService.AddUpdateClientProject(formvalue).subscribe((res: APIResponseModel) => {
      if(res.result){
        this.loadclientProject();
      alert("Project Create");
      } else {
      alert(res.message);
      }
    })
  }
}
