// Garante que o script só rode depois que o HTML carregar
document.addEventListener("DOMContentLoaded", () => {

    // --- LÓGICA DA TELA: boas-vindas.html ---
    
    const botaoAgricultor = document.getElementById("btnAgricultor");
    const botaoIPA = document.getElementById("btnIPA");

    // Adiciona "ouvinte" no botão do Agricultor
    if (botaoAgricultor) {
        botaoAgricultor.addEventListener("click", () => {
            console.log("Botão Agricultor clicado. Redirecionando para identificacao-agricultor.html");
            window.location.href = "identificacao-agricultor.html";
        });
    }

    // Adiciona "ouvinte" no botão do IPA
    if (botaoIPA) {
        botaoIPA.addEventListener("click", () => {
            console.log("Botão IPA clicado.");
            alert("Você clicou em 'Sou do IPA'!");
            // window.location.href = "login-ipa.html";
        });
    }


    // --- LÓGICA DA TELA: identificacao-agricultor.html ---
    
    const btnConsultar = document.getElementById("btnConsultar");

    if (btnConsultar) {
        // Adiciona "ouvinte" no botão de Consultar Sementes
        btnConsultar.addEventListener("click", (event) => {
            event.preventDefault(); 
            console.log("Botão Consultar clicado. Redirecionando para confirmacao-agricultor.html");
            
            // Ação: Mudar para a página de confirmação
            window.location.href = "confirmacao-agricultor.html";
        });
    }


    // --- LÓGICA DA TELA: confirmacao-agricultor.html ---
    
    const btnConfirmar = document.getElementById("btnConfirmar");
    const btnNegar = document.getElementById("btnNegar");

    // Adiciona "ouvinte" no botão "Sim, sou eu"
    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", () => {
            console.log("Botão Confirmar clicado. Redirecionando para dashboard-agricultor.html");
            
            // Ação: Mudar para o Dashboard
            window.location.href = "dashboard-agricultor.html";
        });
    }

    // Adiciona "ouvinte" no botão "Não sou eu"
    if (btnNegar) {
        btnNegar.addEventListener("click", () => {
            console.log("Botão Negar clicado. Voltando para identificacao-agricultor.html");
            
            // Ação: Voltar para a tela de identificação
            window.location.href = "identificacao-agricultor.html";
        });
    }

    
    // --- LÓGICA DA TELA: dashboard-agricultor.html ---

    const btnSair = document.getElementById("btnSair");

    // Adiciona "ouvinte" no botão "Sair"
    if (btnSair) {
        btnSair.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o link de pular a página
            console.log("Botão Sair clicado. Voltando para boas-vindas.html");
            
            // Ação: Voltar para a tela inicial
            window.location.href = "boas-vindas.html";
        });
    }

});