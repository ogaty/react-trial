import React, {Component} from "react";
import NewsChildClass from "./NewsChildClass";

class NewsClass extends Component {
    constructor() {
        super();

        this.state = {
            title: "aaaa",
            xxx: "YYY"
        }
    }

    myButtonClick = (event) => {
        this.setState({xxx: "yyy"})
    }

    render = () => {
        return (
            <>
                <button onClick={this.myButtonClick}>button</button>
                <div>
                    {this.state.title}
                </div>
                <div>
                    {this.props.xxx}
                </div>
                <div>
                    {this.state.xxx}
                </div>
                <NewsChildClass></NewsChildClass>
            </>
        );
    }
}

export default NewsClass;
