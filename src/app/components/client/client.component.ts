import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  isLoader: boolean = true;
  // Create a new client object
  clientObj: Client = new Client();
  // Create a list of clients
  clientList: Client[] = [];

  private clientService = inject(ClientService);

  // Create a constructor
  ngOnInit(): void {
    // Get all clients
    this.loadClient();
  }

  // Load all clients
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
      this.isLoader = false;
    }, (error: any) => {
      console.log(error);
      this.isLoader = false;
    })
  }

  // Save client
  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {

      if (res.result) {
        alert("Client Created Suceessfully");
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert("res.message");

      }
    })
  }

 // Delete client
  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete this client?");
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client Deleted Suceessfully");
          this.loadClient();
        } else {
          alert(res.message);
        }
      })
    }
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }
}
