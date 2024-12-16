import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage: string = '';
  messages: { sender: string; text: string }[] = [];

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.userMessage });
      this.botReply();
      this.userMessage = ''; // Clear input
    }
  }
  

  botReply() {
    const botReply = "I'm here to assist you."; // Replace with dynamic logic if needed
    this.messages.push({ sender: 'bot', text: botReply });
  }
}
