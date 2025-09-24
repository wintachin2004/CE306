import React, {useState} from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div style ={{padding:'20px',textAlign: 'center'}}>
            <h2>Counter Exercise</h2>
            <p>{count}</p>
            <div style={{ margin: '20px 0'}}>
                <button onClick ={() => setCount(count + 1)}style={{backgroundColor:'green'}}>Increment</button>
                <button onClick ={() => setCount(count - 1)}style={{backgroundColor:'red'}}>Decrement</button>
                <button onClick ={() => setCount(0)}style={{backgroundColor:'orange'}}>Reset</button>
            </div>
        </div>
     
    );
};
export default Counter;