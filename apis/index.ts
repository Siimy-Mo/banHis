// index.js
import Form from './Form';


export default class Api {
    Storage: Storage;
    // Classification: Classification;
    // Tag: Tag;
    // Search: Search;
    Form: Form;
    // Absence: Absence;
    // Document: Document;
    // FormSchema: FormSchema;
    // Statistics: Statistics;
    // DocumentApproval: DocumentApproval;
    // Authorization: Authorization;
    // Drive: Drive;

    constructor() {
        this.Storage = new Storage();
        // this.Classification = new Classification();
        // this.Tag = new Tag();
        // this.Search = new Search();
        this.Form = new Form();
        // this.Absence = new Absence();
        // this.Document = new Document();
        // this.FormSchema = new FormSchema();
        // this.Statistics = new Statistics();
        // this.DocumentApproval = new DocumentApproval();
        // this.Authorization = new Authorization();
        // this.Drive = new Drive();
    }
}
