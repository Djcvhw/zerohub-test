import Button from '@material-ui/core/Button';

const FirstQuestionAnswer = () => {
    return (
        <div>
            <p>Кошельки бывают:</p>
            <ul>
                <li>Desktop wallets</li>
                <li>Hardware wallets</li>
                <li>Online wallets or Mobile wallets</li>
                <li>Paper wallets</li>
            </ul>
            <p>Самые удобные - мобильные кошельки. Например <Button type='link'>Exodus</Button></p>
            <p>Вот несколько, которые хорошо себя зарекомендовали</p>
            <ul>
                <li>Mobile: <Button type='link'>Exodus</Button></li>
                <li>Hardware wallets: <Button type='link'>Ledger</Button> or <Button type='link'>Trezor</Button></li>
                <li>Desktop: <Button type='link'>Exodus</Button> (для страниц BTC) / <Button type='link'>Exodus</Button> (для страниц ETH)</li>
            </ul>
        </div>
    );
}

export default FirstQuestionAnswer;