import React, {useState} from 'react';
import './App.css';


function App() {
    let [count, setCount] = useState(0)
    const getBtnClassInc:any=()=>{
        return count===5?'activeInc':'inc'
    }
    const getBtnClassH1:any=()=>{
        return count===5?'activeH1':''
    }
    const getBtnClassReset:any=()=>{
        return count===0?'activeReset':'reset'
    }
    const getDisabledInc:any=()=>{
        return count===5?true:false
    }
    const getDisabledReset:any=()=>{
        return count===0?true:false
    }
    return (
        <div className="App">
            <div className='header'><h1 className={getBtnClassH1()}>{count}</h1></div>
            <div className='footer'>
                <div>
                    <button disabled={getDisabledInc()} onClick={() => setCount(++count)} className={getBtnClassInc()}>inc</button>
                </div>
                <div>
                    <button disabled={getDisabledReset()} onClick={() => setCount(count =0)} className={getBtnClassReset()}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
