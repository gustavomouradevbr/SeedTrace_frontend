// Garante que o script só rode depois que o HTML carregar
document.addEventListener("DOMContentLoaded", () => {

    // Pega os dois botões pelo ID
    const botaoAgricultor = document.getElementById("btnAgricultor");
    const botaoIPA = document.getElementById("btnIPA");

    // Adiciona um "ouvinte" de clique no botão do Agricultor
    if (botaoAgricultor) {
        botaoAgricultor.addEventListener("click", () => {
            console.log("Botão Agricultor clicado. Redirecionando...");
            
            // Ação: Mudar de página (exemplo)
            // No futuro, mude 'identificacao.html' para o nome do seu próximo arquivo
            // window.location.href = "identificacao.html";
            
            alert("Você clicou em 'Sou Agricultor'!");
        });
    }

    // Adiciona um "ouvinte" de clique no botão do IPA
    if (botaoIPA) {
        botaoIPA.addEventListener("click", () => {
            console.log("Botão IPA clicado. Redirecionando...");
            
            // Ação: Mudar de página (exemplo)
            // No futuro, mude 'login-ipa.html' para o nome do seu próximo arquivo
            // window.location.href = "login-ipa.html";

            alert("Você clicou em 'Sou do IPA'!");
        });
    }

});