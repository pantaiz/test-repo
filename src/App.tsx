import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type FilterType = 'all' | 'Dollars' | 'RUBLS'


function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890', id: 1},
        {banknots: 'Dollars', value: 50, number: ' z1234567890', id: 2},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890', id: 3},
        {banknots: 'Dollars', value: 100, number: ' e1234567890', id: 4},
        {banknots: 'Dollars', value: 50, number: ' c1234567890', id: 5},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890', id: 6},
        {banknots: 'Dollars', value: 50, number: ' x1234567890', id: 7},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890', id: 8},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    console.log(filter)

    let usdCurrency = money

    if (filter === 'Dollars') {
        usdCurrency = money.filter(t => t.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        usdCurrency = money.filter(t => t.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (btnTitle: FilterType) => {
        setFilter('Dollars')
        console.log(`state is ${filter}`)
    }

    return (
        <>
            <ul>
                {usdCurrency.map((t, index) => {
                    return (
                        <li key={t.id}>
                            <span> {t.banknots}</span>
                            <span> {t.value}</span>
                            <span> {t.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '50px'}}>
                <button onClick={() => onClickFilterHandler('all')}>All</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
            </div>
        </>
    );
}

export default App;
