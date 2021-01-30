class Game {
    constructor(start){
        this.stats = new Stats()
        this.wallet = new Wallet(start)

        document.getElementById('start').addEventListener('click',this.startGame.bind(this))
        this.boards = [...document.querySelectorAll('.color')]
        this.spanWallet = document.querySelector('#wallet')
        this.inputBid = document.querySelector('#bid')
        this.spanResults = document.querySelector('#results')
        this.spanGames = document.querySelector('#games')
        this.spanWins = document.querySelector('#wins')
        this.spanLosses = document.querySelector('#losses')

        this.render()
    }

    render(colors=['white','white','white'], money = this.wallet.getWalletValue(), result='', stats = [0,0,0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        })
        this.spanWallet.textContent = money;
        if(result){
            result = `wygrałeś ${wonMoney} $`
        } else if(!result && result !== ''){
            result = `przegrałeś ${bid} $`
        }
        console.log(result)
        this.spanResults.textContent = result
        this.spanGames.textContent = stats[0]
        this.spanWins.textContent = stats[1]
        this.spanLosses.textContent = stats[2]

        this.inputBid.value = ''
    }

    startGame(){
        if(this.inputBid.value <1)return alert('Kwota stawki jest za mała!')
        const bid = Math.floor(this.inputBid.value)

        if(!this.wallet.checkCanPlay(bid)){
            return alert('masz za mało środków na taki zakład lub podałeś niewłaściwą wartość zakładu')
        }
        this.wallet.changeWallet(bid, '-')

        this.draw = new Draw()
        const colors = this.draw.getDrawResult()
        console.log(colors)
        const win = Result.checkWinner(colors)
        console.log(win)
        const wonMoney = Result.moneyWonInGame(win, bid)
        this.wallet.changeWallet(wonMoney)
        this.stats.addGameToStats(win, bid)

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, wonMoney)
    }
}