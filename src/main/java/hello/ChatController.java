package hello;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class ChatController {

	// "app/chat/" actual end point
	@MessageMapping("/chat") // ensures that if message is sent to "/chat", newMSG will be called !
	@SendTo("/topic/chatroom") // after new ChatEntry is created newMSG broadcasts it to all subscriber to
								// "/topic/chatroom/"
	public Message newMSG(Message message) throws Exception {
	//	Thread.sleep(500);
		// xss secure
		// sanitized msg content
		return new Message(message.getSender(), HtmlUtils.htmlEscape(message.getContent()));
	}

}
