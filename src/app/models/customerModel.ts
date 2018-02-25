export class CustomerModel {
    customer_id: number;
    firstName: string;
    lastName: string;
    company_id: number;
    email: string;
    phone: string;
    comments: [{
        dateAdded: Date,
        text: string
    }]
}