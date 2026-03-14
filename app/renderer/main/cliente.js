const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        datanascimento: document.getElementById('datanascimento').value,
    };

    try {
        const result = await window.electronAPI.saveCliente(data);
        console.log('cliente salvo com sucesso:', result);
        alert('cliente salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar cliente:', error);
        alert('Erro ao salvar cliente!');
    }
});