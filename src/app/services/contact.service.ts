
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {

  private baseUrl = 'https://mailthis.to/d3v0ps';

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMessage(message: {
    fullName: string;
    email: string;
    comments: string;
  }): Observable<any> {
    return this.httpClient.post(this.baseUrl, {
      name: message.fullName,
      _replyTo: message.email,
      message: message.comments,
      _subject: 'Personal Website Contact Form'
    }, { responseType: 'text' });
  }

}
