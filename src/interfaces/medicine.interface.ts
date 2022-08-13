export interface Medicine {
    id?:            number;
    name:          string;
    detail:        string;
    quantity:      number;
    admin_route:   string;
    taxes_pctge:   number;
    untaxed_price: number;
    created_at?:    Date;
   }
   