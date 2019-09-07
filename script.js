const second = () => {
    setTimeout(() => {
        console.log('hi');
    }, 2000);
}

const first = () => {
    console.log('hello');
    second();
    console.log('hey');
}
first();
