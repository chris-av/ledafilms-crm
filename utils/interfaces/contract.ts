export const ContractTypes = ["Sales", "Acquistion"] as const;
export const ContractStatuses = ["Normal", "Internal", "Cancelled"] as const;
export const DealStatuses = ["Awaiting Signature", "Cancelled", "Deal Memo Executed", "In Negotiation", "Long Form Executed"] as const;

export const ProductionStatuses = ["Completed", "Post-Production", "Production", "Development", "Catalog", "Pre-Production"] as const;

export const DealTypes = ["[MG] [++Mg]", "[Royalties/Revenue Share]", 
  "Co-Production", "Flat Fee", "Minimum Guarantee", "Output Agent", "Production / License Agrmnt",
  "Straight Distribution", "Volume Deal"] as const;




export interface IContract {
  contract_type: string,
  licensor: string,
  distributor: string,
  status: string,
  deal_status: string,
  creation_date: string,
  deal_type: string,
  mg: number,
  cur: string,
  additional_terms: any,
  notes: string,
  contract_id: string,
}



export interface IContracts extends Array<IContract>{};


