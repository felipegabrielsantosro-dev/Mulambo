const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        razao_social: document.getElementById('razao_social').value,
        cnpj: document.getElementById('cnpj').value,
        telefone: document.getElementById('telefone').value
    };

    try {
        const result = await window.electronAPI.saveEmpresa(data);
        Swal.fire({
            title: "Empresa cadastrado com sucesso!",
            icon: "success",
            draggable: true
        });
        console.log('Empresa cadastrado com sucesso:', result);
    } catch (error) {
        Swal.fire({
            title: "Erro ao cadastrar Empresa:",
            text:  error,
            icon: "error"
        });
        console.error('Erro ao cadastrar Empresa:', error);
    }
});