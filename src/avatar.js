function avatar(notifications) {
    let counter = notifications.length;

    if (counter > 9) {
        return 'angry';
    } else {
        return 'happy';
    }
}

export { avatar };