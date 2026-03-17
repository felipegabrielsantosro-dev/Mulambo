const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        cnpj: document.getElementById('cnpj').value,
        telefone: document.getElementById('telefone').value,
    };

    try {
        const result = await window.electronAPI.saveFornecedor(data);
        console.log('Fornecedor salvo com sucesso:', result);
    } catch (error) {
        console.error('Erro ao salvar fornecedor:', error);
    }
});