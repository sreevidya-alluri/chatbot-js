let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let sendMsgBtnEl = document.getElementById("sendMsgBtn");
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatBox() {
    let userMsg = userInputEl.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userMsgEl.value = "";
    getReplyFromChatBot();
}

function getReplyFromChatBot() {
    let noOfChatBotMessages = chatbotMsgList.length;
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatBotMessages) - 1];
    let msgsContainerEl = document.createElement("div");
    msgsContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgsContainerEl);
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatBotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgsContainerEl.appendChild(chatbotMsgEl)
}