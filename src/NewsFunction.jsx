import React, {useState} from "react";
import NewsChildFunction from "./NewsChildFunction";

const NewsFunction = (props) => {
    const [title, setTitle] = useState("aaa");
    const [xxx, setXXX] = useState("YYY");

    const myButtonClick = () => {
        setXXX("yyy");
    }

    return (
        <>
            <button onClick={myButtonClick}>button</button>
            <div>
                {title}
            </div>
            <div>
                {props.xxx}
            </div>
            <div>
                {xxx}
            </div>
            <NewsChildFunction></NewsChildFunction>
        </>
    )
}

export default NewsFunction;
