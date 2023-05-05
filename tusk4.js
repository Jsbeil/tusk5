
function tusk4() {
    let container = document.getElementById('container');
    let blockCount = prompt('Введите количество блоков');
    for (let i = 0; i < blockCount; i++) {
        let block = document.createElement('div');
        block.className = 'block';
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        block.style.background = color;

        let image = document.createElement('img');
        image.className= 'imgblock';
        image.src = 'images/trv1.jpg';
        image.width = 150;
        image.height = 100;
        block.appendChild(image);
        container.appendChild(block);
    }

}
