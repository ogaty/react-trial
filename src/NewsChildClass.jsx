import React, {Component} from "react";

class NewsChildClass extends Component {
    constructor() {
        super();

        this.state = {}
    }

    myFunc = () => {
        alert("aaaa");
    }

    render = () => {
        return (
            <>
                <span>child</span>
            </>
        )
    }
}

export default NewsChildClass;
