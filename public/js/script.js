
var sendBtn = document.getElementById('sendBtn');
var textBox = document.getElementById('textBox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};
var arrayOfPossibleMessage =[
    {message:"hi",Response:"Hello"},
    {message:"how are you?",Response:"I'm good"},
    {message:"what is your name?",Response:"I'm chatbot"},
    {message:"kin khao la ",Response:"kin leo"},
]

function sendMessage(txt){
 var messageElement = document.createElement('div');
 messageElement.style.textAlign = "right";
 messageElement.style.margin = "20px";
 messageElement.innerHTML = "<span> You: </span>"+
                            "<span>" +txt+ "</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(txt){
    var chatbotMessage = "";
    if(txt.length > 0 ){
      var result = arrayOfPossibleMessage.filter(val => val.message.includes(txt.toLowerCase()));
      if(result.length>0){
        var Response = result[0].Response;
        chatbotMessage = Response;
      }else{
        chatbotMessage ="Please send another message";
      }
    }else{
        chatbotMessage ="Please send another message";
    }
    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span> Chatbot: </span>"+
                            "<span>" +chatbotMessage+ "</span>";
                
    setTimeout(() => {
        chatContainer.appendChild(messageElement);
    }, 1000);
    
}



sendBtn.addEventListener('click',function(e){
    var txt = textBox.value;
    if(txt==""){
        alert('Please type in a text')
    }else{
        let messtext= txt.trim();
        user.message = messtext;
        textBox.value= "";
        sendMessage(messtext);
        chatbotResponse(messtext);
    }
}) 