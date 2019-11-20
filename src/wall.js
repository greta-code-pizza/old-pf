function wall(messages, newMessage) {
    messages.unshift(newMessage);

    return messages;
}

export { wall };