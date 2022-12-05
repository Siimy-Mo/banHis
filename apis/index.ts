// index.js
import PillForm from './PillForm';
import PillStatus from './PillStatus';
import Authorization from './Authorization';

// 类似 const api = axio.create({})
// 具体的设置baseURL在子.ts中
export default class Api {
    // Storage: Storage;
    // Classification: Classification;
    // Tag: Tag;
    // Search: Search;
    PillForm: PillForm;
    PillStatus: PillStatus;
    // Absence: Absence;
    // Document: Document;
    // FormSchema: FormSchema;
    // Statistics: Statistics;
    // DocumentApproval: DocumentApproval;
    Authorization: Authorization;
    // Drive: Drive;


    constructor() {
        // this.Storage = new Storage();
        // this.Classification = new Classification();
        // this.Tag = new Tag();
        // this.Search = new Search();
        this.PillForm = new PillForm();
        this.PillStatus = new PillStatus();
        // this.Absence = new Absence();
        // this.Document = new Document();
        // this.FormSchema = new FormSchema();
        // this.Statistics = new Statistics();
        // this.DocumentApproval = new DocumentApproval();
        this.Authorization = new Authorization();
        // this.Drive = new Drive();
    }
}
