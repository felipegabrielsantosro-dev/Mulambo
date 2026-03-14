const productButton = document.getElementById('product-button');

productButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.openPage !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.openPage('listaproduto.html');
    } catch (error) {
        console.error('Erro ao abrir a janela de produtos:', error);
    }
});

const usuarioButton = document.getElementById('usuario-button');

usuarioButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.openPage !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.openPage('listausuario.html');
    } catch (error) {
        console.error('Erro ao abrir a janela de usuarios:', error);
    }
});
const clienteButton = document.getElementById('cliente-button');

clienteButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.openPage !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.openPage('listacliente.html');
    } catch (error) {
        console.error('Erro ao abrir a janela de usuarios:', error);
    }
});
const fornecedorButton = document.getElementById('fornecedor-button');

fornecedorButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.openPage !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.openPage('listafornecedor.html');
    } catch (error) {
        console.error('Erro ao abrir a janela de fornecedor:', error);
    }
});