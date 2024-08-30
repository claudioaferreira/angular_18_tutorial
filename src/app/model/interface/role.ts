export interface IRoles {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}


export interface APIResponseModel {
  result: string;
  message: string;
  data: any;
}


export interface IEmployee {

  empName: string;
  empId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string
  role: string;

}
