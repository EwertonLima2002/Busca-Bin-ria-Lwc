import { LightningElement, track } from 'lwc';

export default class BuscaBinaria extends LightningElement {
    @track array = [1, 6, 7, 8, 20]; // O array deve estar ordenado
    @track indice = -1; // Variável para armazenar o índice do valor encontrado ou -1 se não encontrado

    busca_binaria(array, left, right, valor) {
        if (right >= left) {
            this.indice = parseInt(left + (right - left) / 2);

            if (array[this.indice] === valor) {
                return this.indice; // Retorna o índice do valor encontrado
            }

            if (array[this.indice] > valor) {
                return this.busca_binaria(array, left, this.indice - 1, valor);
            }

            return this.busca_binaria(array, this.indice + 1, right, valor);
        }

        this.indice = -1; // Valor não encontrado
        return this.indice;
    }
}
