export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  //inicializa el objeto
  constructor() {

    this.clientId = 0;
    this.contactPersonName = '';
    this.companyName = '';
    this.address = '';
    this.city = '';
    this.pincode = '';
    this.state = '';
    this.employeeStrength = 0;
    this.gstNo = '';
    this.contactNo = '';
    this.regNo = '';
  }
}

export class ClientProject{

    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    clientName: string;
    clientProjectId: number;

  constructor() {
    this.empName = '';
    this.empId = 0;
    this.empCode = '';
    this.empEmailId = '';
    this.empDesignation = '';
    this.projectName = '';
    this.startDate = new Date();
    this.expectedEndDate = new Date();
    this.clientName = '';
    this.clientProjectId = 0;
  }
}
