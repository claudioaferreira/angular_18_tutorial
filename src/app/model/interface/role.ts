export interface IRoles {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}


export interface APIResponseModel{
  result: string;
  message: string;
  data: any;
}
