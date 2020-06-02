export interface Status {
  valid: boolean
  message?: string
}

export interface Rule {
  message: string
  validator: (value: string) => Status
}