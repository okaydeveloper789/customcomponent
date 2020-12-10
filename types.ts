export type MyFormData = {
    title : string;
    first_name: string;
    last_name: string;
    self_employed_revenue: number;
    self_employed_cost: number;
    wanted_monthly_wage: number;
    number_of_children: number;
    years_active: number;
    email: string;
}

export type TaxApiResponse = {
    userInput: {
      firstName: string,
      lastName: string,
      aanspreking: string,
      self_employed_revenue:number,
      self_employed_cost:number,
      number_of_children:string,
      minimum_net_income:number,
      self_employed_years_active:string
      email: string
      number_of_years:number
    },
    taxAPIOutput:{
      positiveAdvice:boolean,
      yesManco:{
        account:number,
        net_average:number,
        cost_average:number,
        remainder_average:number,
        tax_pressure:string
      },
      noManco:{
        account:number,
        net_average:number,
        cost_average:number,
        remainder_average:number,
        tax_pressure:string
      }
    }
  }