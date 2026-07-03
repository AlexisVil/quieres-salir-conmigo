export type DatePlanId = 'cafe' | 'cena' | 'cine' | 'parque' | 'postre' | 'sorpresa';

export type DateRequest = {
  date: string;
  time: string;
  plan: DatePlanId;
  message?: string;
};
