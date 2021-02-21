import React, {useEffect, useState} from 'react'

const Button = ({type, update, curr, len}) => {
    const [symb, setSymb] = useState('');
    const [style, setStyle] = useState({});
    useEffect (()=>{
        if (type == 'prev') {
            setSymb('<');
            setStyle({left: '3vw'});
        } else if (type == 'next') {
            setSymb('>');
            setStyle({right: '3vw'});
        }
    },[])

    //Update index based on button type clicked
    //Reset carousel if reached end
    function updateFunc () {
        if (symb == '<') {
            if (curr <= 1) {
                update(len);
            } else {
                update(curr-1);
            }
        } else if (symb == '>') {
            if (curr >= len) {
                update(1);
            } else {
                update(curr+1);
            }
        }
    }
    
    return (
        <button className='button' style={style} onClick = {()=> updateFunc()}>
            {symb}
        </button>
    )
}

export default Button