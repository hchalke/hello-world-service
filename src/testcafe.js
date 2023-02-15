import { Selector } from 'testcafe';

fixture `Hello World Test`
    .page('http://localhost:3000');

test('Hello World text and link to React', async t => {
    const helloWorldText = Selector('h1').withText('Hello World!');
    const authorText = Selector('p').withText('This is Hardik Chalke');
    const link = Selector('a').withText('Learn React');

    await t
        .expect(helloWorldText.exists).ok()
        .expect(authorText.exists).ok()
        .expect(link.exists).ok();
});
