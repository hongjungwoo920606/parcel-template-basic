console.log('hello jungwoo');

async function test() {
    const promise = Promise.resolve(123)
    console.log(await promise)
}
test()