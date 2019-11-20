function notification(notifications) {
    let counter = notifications.length;
    let color;

    if (counter > 9) {
        color = 'red';
    } else {
        color = 'orange';
    }

    return [counter, color];
}

export { notification };