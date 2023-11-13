const Banco = {
    conta: 12345, 
    saldo: 3000,
    tipoConta: "corrente",
    agencia: 0o1,
    buscarSaldo: function() {
        return `O saldo atual é de R$${this.saldo}.`;
    },
    deposito: function(valor) {
        this.saldo += valor;
        return `Depósito realizado com sucesso. O saldo atual é de R$${this.saldo}.`;
    },
    saque: function(valor) {
        this.saldo -= valor;
        return `Saque realizado com sucesso. O saldo atual é de R$${this.saldo}.`;
    },
    numeroConta: function() {
        return `O número da conta é ${this.conta}`;
      }
     };

console.log(Banco.buscarSaldo());
console.log(Banco.deposito(600));
console.log(Banco.saque(150));
console.log(Banco.numeroConta());