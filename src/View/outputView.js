import { Console } from '@woowacourse/mission-utils';
import { MATCHES } from '../Constant/constants.js';
// import { INPUT_MESSAGES } from '../Constant/messages.js';

export class OutputHandler {
  printPurchaseCount(purchaseCount) {
    // TODO: 리펙토링 - 상수처리
    return Console.readLineAsync(`\n${purchaseCount}개를 구매했습니다.\n`);
  }

  printIssuedLottoList(purchasedLottoList) {
    purchasedLottoList.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });
  }

  // 당첨내역을 프린트 한다.
  printWinningStatistics() {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(
      `3개 일치 (5,000원) - ${MATCHES.THREE_MATCHES}개\n` +
        `4개 일치 (50,000원) - ${MATCHES.FOUR_MATCHES}개\n` +
        `5개 일치 (1,500,000원) - ${MATCHES.FIVE_MATCHES}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${MATCHES.FIVE_MATCHES_BONUS}개\n` +
        `6개 일치 (2,000,000,000원) - ${MATCHES.SIX_MATCHES}개\n`,
    );
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(`\n총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
