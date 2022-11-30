import React, {useRef, useState} from "react";
import NewsChildFunction from "./NewsChildFunction";

const NewsFunction = (props) => {
    const [title, setTitle] = useState("aaa");
    const [xxx, setXXX] = useState("YYY");

    const myRef = useRef();

    const myButtonClick = () => {
        setXXX("yyy");
    }

    const childButtonClick = () => {
        myRef.current.childButtonClick();
    }

    return (
        <>
            <button onClick={myButtonClick}>button</button>
            <button onClick={childButtonClick}>child</button>
            <div>
                {title}
            </div>
            <div>
                {props.xxx}
            </div>
            <div>
                {xxx}
            </div>
            <NewsChildFunction ref={myRef}></NewsChildFunction>
        </>
    )
}

export default NewsFunction;
