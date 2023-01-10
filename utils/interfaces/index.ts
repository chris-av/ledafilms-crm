export const ContractTypes = ["Sales", "Acquistion"] as const;
export const ContractStatuses = ["Normal", "Internal", "Cancelled"] as const;
export const DealStatuses = ["Awaiting Signature", "Cancelled", "Deal Memo Executed", "In Negotiation", "Long Form Executed"] as const;

export const ProductionStatuses = ["Completed", "Post-Production", "Production", "Development", "Catalog", "Pre-Production"] as const;

export const DealTypes = ["[MG] [++Mg]", "[Royalties/Revenue Share]", 
  "Co-Production", "Flat Fee", "Minimum Guarantee", "Output Agent", "Production / License Agrmnt",
  "Straight Distribution", "Volume Deal"] as const;

export const TitleTypes = ["Episodes", "Film", "Format", "Mini-Series", "Seasons", "Series"] as const;
export const TitleCodes = ["Acquired Content", "Representation Only", "Produced Content"] as const;



export * from './contract';
export * from './talent';
export * from './open-window';
export * from './filters';





