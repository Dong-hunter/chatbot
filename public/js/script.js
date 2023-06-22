
var sendBtn = document.getElementById('sendBtn');
var textBox = document.getElementById('textBox');
var chatContainer = document.getElementById('chatContainer');
var input = document.querySelector('input');

// Message Text
var user = { message: "" };
var arrayOfPossibleMessage = [
    { message: "hi", Response: "Hi" },
    { message: "how are you?", Response: "I'm good"},
    { message: "what is your name?", Response: "I'm chatbot" },
    { message: "kin KHao la ", Response: "kin leo" },
    { message: "how are you?", Response: "I'm OK" },
    { message: "what you are eating food?", Response: "BBQ" },
    { message: "can you dance ?", Response: "Yes, I will go" },
    { message: "you want to go restaurant ?", Response: "Yes, I think to drink beer" },
    { message: "hello", Response: "Hello, Can I help you" }
]

function sendMessage(txt) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "20px";
    messageElement.innerHTML = "<span> You: </span>" +
        "<span>" + txt + "</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(txt) {
    var chatbotMessage = "";
    if (txt.length > 0 ) {
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(txt.toLowerCase()));// Text Big or Small no Problem
        if (result.length > 0) {
            var Response = result[0].Response;
            chatbotMessage = Response;
        } else {
            chatbotMessage = "Please send another message";
        }
    } else {
        chatbotMessage = "Please send another message";
    }
    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span> Chatbot: </span>" +
        "<span>" + chatbotMessage + "</span>";

    setTimeout(() => {
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight; // message scrollTop (Text go up auto)
    }, 1000);

}

// Click Button Send Text
sendBtn.addEventListener('click', function(e){
    var txt = textBox.value;
    if(txt == ""){
        alert("Please type in a text message !") 
    }else{
        let messText = txt.trim();
        user.message = messText;
        textBox.value = "";
        sendMessage(messText);
        chatbotResponse(messText);
    }
    textBox.focus();
})

//Enter On TextBox Send Text
input.addEventListener('keypress', (e) =>{
    var txt = textBox.value;
    if(e.key == "Enter"){
        if(txt == ""){
            alert("Please type in a text message !")
        }else{
            let messText = txt.trim();
        user.message = messText;
        textBox.value = "";
        sendMessage(messText);
        chatbotResponse(messText);
        }
    }
    textBox.focus(); // cursor focus textBox
})
