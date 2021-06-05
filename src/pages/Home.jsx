import React, { useEffect } from 'react'
import Counter from '../components/Counter'
import { useAppContext } from '../context/AppContext';

export default function Home() {
    const { count, setCount } = useAppContext();
    useEffect(() => {
        document.title = "React Basics | Home"
    }, [])
    return (
        <div className="home">
            <Counter count={count} setCount={setCount} />
        </div>
    )
}
