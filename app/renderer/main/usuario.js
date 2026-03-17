const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        sobrename: document.getElementById('sobrename').value,
    };

    try {
        const result = await window.electronAPI.saveUsuario(data);
        console.log('usuario salvo com sucesso:', result);
    } catch (error) {
        console.error('Erro ao salvar usuario:', error);
    }
});