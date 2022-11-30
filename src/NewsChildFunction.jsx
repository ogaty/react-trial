import {forwardRef, useImperativeHandle, useState} from "react";

const NewsChildFunction = (props, ref) => {
    const [title, setTitle] = useState("aaa");

    useImperativeHandle(
        ref,
        () => ({
            childButtonClick() {
                setTitle("called from parent");
            }
        }),
    )

    return(
        <>
            <div>child</div>
            <div>{title}</div>
        </>
    );
}

export default forwardRef(NewsChildFunction);
