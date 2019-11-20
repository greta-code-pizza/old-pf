import { wall } from "./wall";
import { avatar } from "./avatar";
import {notification} from "./notification";

const wallWrapper = document.getElementById('wall-wrapper');
const pikaImage = document.getElementById('pika');

let messages = [];

pikaImage.innerHTML = "<img src='./assets/images/happy-pika.jpg' />";

function newMessage() {
    let newMessage = document.getElementById('create-message').value;
    let listOfMessages = wall(messages, newMessage);
    wallWrapper.innerHTML = "";

    if (listOfMessages.length === 0) {
        wallWrapper.innerHTML = "<div class='no-messages'>Aucun message pour le moment</div><br/>";
    } else {
        listOfMessages. forEach(message => {
            wallWrapper.innerHTML += "<div class='message'>" + message + "</div><br/>";
        });
    }

    pikamaj(messages);
    notify(messages);
}

function pikamaj(messages) {
    let path = `./assets/images/${avatar(messages)}-pika.jpg`;

    pikaImage.innerHTML = "<img src='" + path + "' />"
}


function notify(messages) {
    let infos = notification(messages);

    pikaImage.innerHTML += "<p class='notif notif-" + infos[1] + "'>" + infos[0] + "</p>";
}

window.newMessage = newMessage;
