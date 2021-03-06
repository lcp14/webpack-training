import print from './msg';

console.log(_.difference([1,2,3], [4,5]))

console.log(_.lastIndexOf([1,2,3]))

console.log(module);
if(module.hot){
    module.hot.accept('./msg', function() {
        console.log("O módulo de msg atualizou!");
        print();
    });
}

function createButton() {
    const btn = document.createElement('button');
    btn.innerText = 'Clica aqui!';
    document.querySelector('body').appendChild(btn);

    btn.onclick = e => import('./lazy').then(module => {
        const lazy = module.default;
        lazy();
    })
}

createButton();