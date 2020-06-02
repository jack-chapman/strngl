export interface Status {
  valid: boolean;
  message?: string;
}

export interface Rule {
  validator: (value: string) => Status;
}
