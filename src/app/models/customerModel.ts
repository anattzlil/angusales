export class CustomerModel {
    customer_id: number;
    firstName: string;
    lastName: string;
    company_id: number;
    Email: string;
    phone: string;
    comments: [{
        dateAdded: Date,
        text: string
    }]
}