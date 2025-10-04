import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { increment, decrement, fetchValue, fetchText, double } from './redux/_example/example.slice';
import clsx from 'clsx';
import { config } from '@config/index';
import { useGetTodoQuery } from '@redux/_example/example.api';

function App() {
    const value = useSelector((state: RootState) => state.example.value);
    const loading = useSelector((state: RootState) => state.example.loading);
    const text = useSelector((state: RootState) => state.example.text);
    const textLoading = useSelector((state: RootState) => state.example.textLoading);
    const dispatch = useDispatch<AppDispatch>();
    const { data: todo, isLoading: isTodoLoading } = useGetTodoQuery(1);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>{config.greeting}</span>
                <a className={clsx('App-link', 'link')} href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
                <div style={{ marginTop: 20 }}>
                    <h3>Redux Example Value: {value}</h3>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(double())} style={{ marginLeft: 8 }}>
                        Double
                    </button>
                    <button onClick={() => dispatch(decrement())} style={{ marginLeft: 8 }}>
                        Decrement
                    </button>
                    <button onClick={() => dispatch(fetchValue())} style={{ marginLeft: 8 }} disabled={loading}>
                        {loading ? 'Loading...' : 'Fetch Random Value'}
                    </button>
                </div>
                <div style={{ marginTop: 20 }}>
                    <h3>Redux Example Text: {text}</h3>
                    <button onClick={() => dispatch(fetchText({ text: 'Hi' }))} disabled={textLoading}>
                        {textLoading ? 'Loading...' : 'Fetch Text'}
                    </button>
                </div>
                {isTodoLoading ? <div>Loading todo...</div> : <div>{todo?.title}</div>}
            </header>
        </div>
    );
}

export default App;
