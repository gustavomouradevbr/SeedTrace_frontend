// Garante que o script só rode depois que o HTML carregar
document.addEventListener("DOMContentLoaded", () => {

    // --- LÓGICA DA TELA: boas-vindas.html ---
    
    const botaoAgricultor = document.getElementById("btnAgricultor");
    const botaoIPA = document.getElementById("btnIPA");

    if (botaoAgricultor) {
        botaoAgricultor.addEventListener("click", () => {
            console.log("Botão Agricultor clicado. Redirecionando...");
            window.location.href = "identificacao-agricultor.html";
        });
    }

    if (botaoIPA) {
        botaoIPA.addEventListener("click", () => {
            console.log("Botão IPA clicado. Redirecionando para login-ipa.html");
            // ATUALIZADO AQUI
            window.location.href = "login-ipa.html";
        });
    }


    // --- LÓGICA DA TELA: identificacao-agricultor.html ---
    
    const btnConsultar = document.getElementById("btnConsultar");

    if (btnConsultar) {
        btnConsultar.addEventListener("click", (event) => {
            event.preventDefault(); 
            console.log("Botão Consultar clicado. Redirecionando...");
            window.location.href = "confirmacao-agricultor.html";
        });
    }


    // --- LÓGICA DA TELA: confirmacao-agricultor.html ---
    
    const btnConfirmar = document.getElementById("btnConfirmar");
    const btnNegar = document.getElementById("btnNegar");

    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", () => {
            console.log("Botão Confirmar clicado. Redirecionando...");
            window.location.href = "dashboard-agricultor.html";
        });
    }

    if (btnNegar) {
        btnNegar.addEventListener("click", () => {
            console.log("Botão Negar clicado. Voltando...");
            window.location.href = "identificacao-agricultor.html";
        });
    }

    
    // --- LÓGICA DA TELA: dashboard-agricultor.html ---

    const btnSair = document.getElementById("btnSair");
    const dashboardButtons = document.querySelectorAll(".lote-list .button.small");

    // Botão Sair do Header
    if (btnSair) {
        btnSair.addEventListener("click", (event) => {
            event.preventDefault(); 
            console.log("Botão Sair clicado. Voltando para home...");
            window.location.href = "boas-vindas.html";
        });
    }

    // Botões dos Cards (Rastrear / Comprovante)
    if (dashboardButtons.length > 0) {
        dashboardButtons.forEach(button => {
            
            // Lógica para Rastrear
            if (button.textContent.includes("Rastrear")) {
                
                const card = button.closest('.lote-card');
                const cardTitle = card.querySelector('h3').textContent;

                if (cardTitle.includes("Milho")) {
                    button.addEventListener("click", () => {
                        console.log("Botão Rastrear (Milho) clicado.");
                        window.location.href = "rastreamento-lote.html";
                    });
                } else if (cardTitle.includes("Sorgo")) {
                    button.addEventListener("click", () => {
                        console.log("Botão Rastrear (Sorgo) clicado.");
                        window.location.href = "rastreamento-sorgo.html";
                    });
                }
            } 
            // Lógica para Comprovante
            else if (button.textContent.includes("Comprovante")) {
                button.addEventListener("click", () => {
                    console.log("Botão Comprovante clicado. Redirecionando...");
                    window.location.href = "comprovante.html";
                });
            }
        });
    }

    
    // --- LÓGICA DA TELA: rastreamento-lote.html (e outras com header branco) ---

    const btnVoltar = document.getElementById("btnVoltar");
    const btnSairRastreio = document.getElementById("btnSairRastreio");

    // Botão Voltar (Reaproveitado)
    if (btnVoltar) {
        btnVoltar.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Botão Voltar clicado. Voltando para o dashboard...");
            window.location.href = "dashboard-agricultor.html";
        });
    }

    // Botão Sair (Específico do Rastreio de Milho)
    if (btnSairRastreio) {
        btnSairRastreio.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Botão Sair (Rastreio) clicado. Voltando para home...");
            window.location.href = "boas-vindas.html";
        });
    }

    
    // --- LÓGICA DA TELA: comprovante.html ---

    const btnSairComprovante = document.getElementById("btnSairComprovante");
    const btnBaixarPDF = document.getElementById("btnBaixarPDF");

    // Botão Sair (Específico do Comprovante)
    if (btnSairComprovante) {
        btnSairComprovante.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Botão Sair (Comprovante) clicado. Voltando para home...");
            window.location.href = "boas-vindas.html";
        });
    }

    // Botão Baixar PDF
    if (btnBaixarPDF) {
        btnBaixarPDF.addEventListener("click", () => {
            console.log("Botão Baixar PDF clicado.");
            alert("Simulando download do comprovante em PDF...");
        });
    }


    // --- LÓGICA DA TELA: rastreamento-sorgo.html ---

    const btnSairRastreioSorgo = document.getElementById("btnSairRastreioSorgo");

    // Botão Sair (Específico do Rastreio de Sorgo)
    if (btnSairRastreioSorgo) {
        btnSairRastreioSorgo.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Botão Sair (Rastreio Sorgo) clicado. Voltando para home...");
            window.location.href = "boas-vindas.html";
        });
    }


    // --- LÓGICA DA TELA: login-ipa.html ---
    
    const btnAcessarIPA = document.getElementById("btnAcessarIPA");

    if (btnAcessarIPA) {
        btnAcessarIPA.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o formulário de recarregar
            console.log("Botão Acessar (IPA) clicado.");
            
            // Ação: Mudar para o dashboard do IPA (nome futuro)
            // window.location.href = "dashboard-ipa.html";
            
            alert("Login do IPA em construção!");
        });
    }

});