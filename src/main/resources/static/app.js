var stompClient = null;

function connect() {
	// create connection
	var socket = new SockJS('/websocket');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) {
		console.log('Connected: ' + frame);
		// subscribe to /topic/chat
		stompClient.subscribe('/topic/chatroom', function(message) {
			showMSG(JSON.parse(message.body).sender,
					JSON.parse(message.body).content);
		});
	});
}
function showMSG(sender, content) {
	var dt = new Date();
	var seconds = dt.getSeconds();
	var minutes = dt.getMinutes();
	var hours = dt.getHours();
	$("#chat").prepend(
			"<tr><td style=\"width:1%;\"\">" + hours + ":" + minutes + ":"
					+ seconds + "</td><td>" + sender + ": " + content
					+ "</td></tr>");
}
function sendMSG() {
	stompClient.send("/app/chat", {}, JSON.stringify({
		'sender' : $("#sender").val(),
		'content' : $("#content").val()
	}))
}

window.onload = connect;
$(document).ready(function() {
	$(".buttom-btn").click(function() {
		$(".top-btn").addClass('top-btn-show');
		$(".contact-form-page").addClass('show-profile');
		$(this).addClass('buttom-btn-hide')
	});

	$(".top-btn").click(function() {
		$(".buttom-btn").removeClass('buttom-btn-hide');
		$(".contact-form-page").removeClass('show-profile');
	});
	$("form").on('submit', function(e) {
		e.preventDefault();
	});
	$("#send").click(function() {
		sendMSG();
	});
})
