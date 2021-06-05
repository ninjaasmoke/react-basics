import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext';

export default function About() {
    const { count } = useAppContext();
    useEffect(() => {
        document.title = "React Basics | About"
    }, []);
    return (
        <div style={{ padding: '20px' }}>
            {count}
        </div>
    )
}
