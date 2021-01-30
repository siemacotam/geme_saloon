class Wallet {
    constructor(money){
        let _money = money
// sprawdzanie stanu portfela
        this.getWalletValue = () => _money;
// sprawdzanie czy mozna grac- stan konta
        this.checkCanPlay = value => {
            if(_money>= value) return true;
            return false;
        }
    
        this.changeWallet = (value, type = '+') => {
            if(typeof value === 'number' && !isNaN(value)){
                if(type ==='+'){
                    return _money += value;
                } else if(type ==='-'){
                    return _money -= value;
                } else {
                    throw new Error('coś się popsuło')
                }
            } else {
                throw new Error('nieprawidłowy format liczbowy')
        }
 }
 
}
}