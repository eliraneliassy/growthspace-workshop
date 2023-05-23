import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BooksService {

    BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

    getBooks() {
        
    }

}