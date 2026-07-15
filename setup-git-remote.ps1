# ##############################################################################
# setup-git-remote.ps1
# Script para conectar o repositório local ao remoto no GitHub.
# ##############################################################################

# Definições de cores e cabeçalho
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Configuração DevOps - Sincronização de Repositório Remoto" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = "https://github.com/professortoniati/atg2607-05-pagina-vendas.git"

# 1. Verificar se estamos dentro de um repositório Git
if (!(Test-Path .git)) {
    Write-Host "[!] Repositório Git local não encontrado. Inicializando..." -ForegroundColor Yellow
    git init
}

# 2. Configurar o nome do branch principal para main
Write-Host "[*] Definindo branch principal como 'main'..." -ForegroundColor Gray
git branch -M main

# 3. Adicionar ou atualizar o endereço remoto 'origin'
$existingRemote = git remote get-url origin 2>$null

if ($existingRemote) {
    Write-Host "[*] Atualizando repositório remoto existente de: $existingRemote para: $repoUrl" -ForegroundColor Gray
    git remote set-url origin $repoUrl
} else {
    Write-Host "[*] Adicionando novo repositório remoto: $repoUrl" -ForegroundColor Gray
    git remote add origin $repoUrl
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " [✓] Repositório remoto configurado com sucesso!" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Para enviar seus arquivos ao GitHub, execute o seguinte comando:" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor Yellow
Write-Host ""
