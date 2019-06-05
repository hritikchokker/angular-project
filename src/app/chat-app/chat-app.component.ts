import { Component, OnInit, OnDestroy, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
  providers: [ChatService]
})
export class ChatAppComponent implements OnInit, OnDestroy {

  @ViewChild('chatInput') chatInput: ElementRef;

  public messages = [];
  public connection;
  public message;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  @HostListener('click')
  public autofocusInput() {
    this.chatInput.nativeElement.focus();
  }
}
