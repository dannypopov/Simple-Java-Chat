package hello;

public class Message {

	private String sender;
	private String content;

	public Message() {

	}

	public Message(String sender, String content) {
		this.sender = sender;
		this.content = content;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getSender() {
		return sender;
	}

	public String getContent() {
		return content;
	}

	@Override
	public String toString() {
		return "Message [sender=" + sender + ", content=" + content + ", getSender()=" + getSender() + ", getContent()="
				+ getContent() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

}
