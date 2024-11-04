// 로또 티켓과 당첨 번호를 생성하는 역할
class LottoMachine {
    generateLotto() {
        const numbers = MissionUtils.Random.pickUniqueNumbersinRange(1, 45, 6);
        return new Lotto(numbers);
    }

    generateWinningNumbers(){
        const winningNumbers = MissionUtils.Random.pickUniqueNumbersinRange(1,45,6);
        const bonusNumber = MissionUtils.Random.pickUniqueNumbersinRange(1,45,1)[0];
        return {winningNumbers, bonusNumber};
    }
    } 