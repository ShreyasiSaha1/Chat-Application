const socket=io('http://localhost:8000');

const form=document.getElementById('send-container');
const msgInput=document.getElementById('messageInp');
const msgContainer=document.querySelector(".container");

const append=(message,position)=>{
    const msgElement=document.createElement('div');
    msgElement.innerText=message;
    msgElement.classList.add('message');
    msgElement.classList.add('position');
    msgContainer.append(msgElement);
}

const username=prompt("Enter your name");
socket.emit('new-user-joined', username);

socket.on('user-joined',username=>{
append(`${username} joined the chat`,right);
})