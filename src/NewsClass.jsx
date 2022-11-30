import React, {Component} from "react";
import NewsChildClass from "./NewsChildClass";

class NewsClass extends Component {
    constructor() {
        super();

        this.state = {
            title: "aaaa",
            xxx: "YYY"
        }

        this.SampleModalRef = React.createRef();
        this.myFunc = this.myFunc.bind(this);

    }

    myFunc = () => {
        this.SampleModalRef.current.myFunc();
    }

    myButtonClick = (event) => {
        this.setState({xxx: "yyy"})
    }

    render = () => {
        return (
            <>
                <button onClick={this.myButtonClick}>button</button>
                <button onClick={this.myFunc}>child</button>
                <div>
                    {this.state.title}
                </div>
                <div>
                    {this.props.xxx}
                </div>
                <div>
                    {this.state.xxx}
                </div>
                <NewsChildClass ref={this.SampleModalRef}></NewsChildClass>
            </>
        );
    }
}

export default NewsClass;
