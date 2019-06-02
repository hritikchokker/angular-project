import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
  providers: [ChatService]
})
export class ChatAppComponent implements OnInit {
  constructor(private chatService: ChatService) {}
  ngOnInit(){
    this.chatService.listen('test event')
    .subscribe((data) => {
      console.log(data);
    })
  }
}
