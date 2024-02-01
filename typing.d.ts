export interface Drug {
  id: string;
  tradeName: string;
  genericName?: string;
  registrationNo?: string;
  dateRegistered?: Date;
  description?: string;
  simpleDescription?: string;
  clinicalDescription?: string;
  strength?: string;
  form?: string;
  applicantName?: string;
  principalName?: string;
  categoryId?: string;
  foodInteractions?: string;
  levelOfAvailability: "A" | "B" | "C";
  drugPriority: "N" | "M" | "H";
  categoryType: "PRESCRIPTION_PREPARATIONS_9TH_SCHEDULE_PP" | "OTHER";
  ispublished: boolean;
  createdAt: Date;
  updatedAt: Date;
  map: any;
}
export interface Drugs {
  drugs: Drug[]; // Corrected to be an array of Drug objects
}

export interface SuggestionsFetchRequestedParams {
  value: string;
}
