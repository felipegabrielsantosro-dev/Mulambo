const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        razaoSocial: document.getElementById('razaoSocial').value,
        nomeFantasia: document.getElementById('nomeFantasia').value,
        cnpj: document.getElementById('cnpj').value,
        telefone: document.getElementById('telefone').value,
    };

    try {
        if (!window.electronAPI || typeof window.electronAPI.saveEmpresa !== 'function') {
            throw new Error('API do Electron não foi injetada pelo preload');
        }

        const result = await window.electronAPI.saveEmpresa(data);
        console.log('Empresa salva com sucesso:', result);

    } catch (error) {
        console.error('Erro ao salvar empresa:', error);
    }
});