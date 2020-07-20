

function newElement(tag, content){
    const root = document.querySelector('#root');

    const title = document.createElement(`${tag}`);

    title.textContent = `${content}`;

    root.append(title);
}

newElement('h1', 'React');
newElement('h2', 'React Native');