const voltarButton = document.getElementById('voltar-button');
const cadastroButton = document.getElementById('cadastro-button');

voltarButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.goHome !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.goHome();
    } catch (error) {
        console.error('Erro ao voltar para a tela inicial:', error);
    }
});

cadastroButton.addEventListener('click', async () => {
    try {
        if (!window.electronAPI || typeof window.electronAPI.openPage !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }
        await window.electronAPI.openPage('empresa.html');
    } catch (error) {
        console.error('Erro ao abrir a tela de cadastro de empresa:', error);
    }
});