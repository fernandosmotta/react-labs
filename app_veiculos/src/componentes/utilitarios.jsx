export function formatarPreco(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

export function formatarNumero(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'decimal', maximumFractionDigits: 2 }).format(valor);
}

