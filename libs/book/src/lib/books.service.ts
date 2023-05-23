import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Book } from "./book.interface";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BooksService {

    BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

    constructor(private httpClient: HttpClient) { }

    getBooks(query: string): Observable<Book[]> {
        let params = new HttpParams();
        params = params.append('q', query);

        return this.httpClient.get<any>(this.BASE_URL, { params })
        .pipe(
            map((res: any) => res.items),
            map((res: any[]) => res.map(item => ({
                id: item.id,
                title: item.volumeInfo.title,
                description: item.volumeInfo.description,
                price: item.volumeInfo.pageCount,
                imageLink: item.volumeInfo.imageLinks?.thumbnail
            })))
        )
    }

}