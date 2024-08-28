import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation, IRoles } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  private masterService = inject(MasterService);
  designationList: IDesignation[] = [];

  isLoader: boolean = true;
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result: APIResponseModel) => {
      this.designationList = result.data;
      this.isLoader = false;
    }, (error:any) => {
      console.log(error);
      this.isLoader = false;
    });
  }



}
