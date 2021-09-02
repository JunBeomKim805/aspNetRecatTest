import React, { Component } from "react";

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            countforAgain: 31,
            countforAgain1: 31,
            countforAgain2: 31,
            countforAgain3: 31,
            countforAgain4: 31,
            countforAlert: 21600,
            countforAlert1: 21600,
            countforAlert2: 21600,
            countforAlert3: 21600,
            countforAlert4: 21600,
        }
    }
    clickHandler = () => {
        this.setState({ count: 5, countforAgain: 0, countforAlert:21600 })
    }
    clickHandler1 = () => {
        this.setState({ count1: 5, countforAgain1: 0, countforAlert1: 21600 })
    }
    clickHandler2 = () => {
        this.setState({ count2: 5, countforAgain2: 0, countforAlert2: 21600 })
    }
    clickHandler3 = () => {
        this.setState({ count3: 5, countforAgain3: 0, countforAlert3: 21600 })
    }
    clickHandler4 = () => {
        this.setState({ count4: 5, countforAgain4: 0, countforAlert4: 21600 })
    }
    stopHandler = () => {
        this.setState({count:0})
    }
    stopHandler1 = () => {
        this.setState({ count1: 0 })
    }
    stopHandler2 = () => {
        this.setState({ count2: 0 })
    }
    stopHandler3 = () => {
        this.setState({ count3: 0 })
    }
    stopHandler4 = () => {
        this.setState({ count4: 0 })
    }
    render() {
        const { count } = this.state
        const { count1 } = this.state
        const { count2 } = this.state
        const { count3 } = this.state
        const { count4 } = this.state
        const { countforAgain } = this.state
        const { countforAgain1 } = this.state
        const { countforAgain2 } = this.state
        const { countforAgain3  } = this.state
        const { countforAgain4 } = this.state

        return (
            <div>
                <center>
                    {this.state.countforAlert === 0 && alert('Plant1 needs water')}
                    {this.state.countforAlert1 === 1 && alert('Plant2 needs water')}
                    {this.state.countforAlert2 === 1 && alert('Plant3 needs water')}
                    {this.state.countforAlert3 === 1 && alert('Plant4 needs water')}
                    {this.state.countforAlert4 === 1 && alert('Plant5 needs water')}
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Plant</th>
                                <th>Status</th>
                                <th>Giving Water</th>
                                <th>Recieving water</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>plant1</td>
                            <td>good</td>
                            <td><button disabled={countforAgain >= 0 && countforAgain < 30} onClick={this.clickHandler}>start</button><button disabled={count===0} onClick={this.stopHandler}>stop</button></td>
                            {this.state.count > 0 && <td>{count}</td>}
                        </tbody>
                        <tbody>
                            <td>plant2</td>
                            <td>good</td>
                            <td><button disabled={countforAgain1 >= 0 && countforAgain1 < 30} onClick={this.clickHandler1}>start</button><button disabled={count1 === 0} onClick={this.stopHandler1}>stop</button></td>
                            {this.state.count1 > 0 && <td>{count1}</td>}
                        </tbody>
                        <tbody>
                            <td>plant3</td>
                            <td>good</td>
                            <td><button disabled={countforAgain2 >= 0 && countforAgain2 < 30} onClick={this.clickHandler2}>start</button><button disabled={count2 === 0} onClick={this.stopHandler2}>stop</button></td>
                            {this.state.count2 > 0 && <td>{count2}</td>}
                        </tbody>
                        <tbody>
                            <td>plant4</td>
                            <td>good</td>
                            <td><button disabled={countforAgain3 >= 0 && countforAgain3 < 30} onClick={this.clickHandler3}>start</button><button disabled={count3 === 0} onClick={this.stopHandler3}>stop</button></td>
                            {this.state.count3 > 0 && <td>{count3}</td>}
                        </tbody>
                        <tbody>
                            <td>plant5</td>
                            <td>good</td>
                            <td><button disabled={countforAgain4 >= 0 && countforAgain4 < 30} onClick={this.clickHandler4}>start</button><button disabled={count4 === 0} onClick={this.stopHandler4}>stop</button></td>
                            {this.state.count4 > 0 && <td>{count4}</td>}
                        </tbody>
                    </table>
                </center>

            </div>

            )
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.count > 0) {
                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            }
            else if (this.state.countforAgain >= 0 && this.state.countforAgain <= 30) {
                this.setState(prevState => ({
                    countforAgain: prevState.countforAgain + 1
                }))
            }
            if (this.state.count1 > 0) {
                this.setState(prevState => ({
                    count1: prevState.count1 - 1
                }))
            }
            else if (this.state.countforAgain1 >= 0 && this.state.countforAgain1 <= 30) {
                this.setState(prevState => ({
                    countforAgain1: prevState.countforAgain1 + 1
                }))
            }
            if (this.state.count2 > 0) {
                this.setState(prevState => ({
                    count2: prevState.count2 - 1
                }))
            }
            else if (this.state.countforAgain2 >= 0 && this.state.countforAgain2 <= 30) {
                this.setState(prevState => ({
                    countforAgain2: prevState.countforAgain2 + 1
                }))
            }
            if (this.state.count3 > 0) {
                this.setState(prevState => ({
                    count3: prevState.count3 - 1
                }))
            }
            else if (this.state.countforAgain3 >= 0 && this.state.countforAgain3 <= 30) {
                this.setState(prevState => ({
                    countforAgain3: prevState.countforAgain3 + 1
                }))
            }
            if (this.state.count4 > 0) {
                this.setState(prevState => ({
                    count4: prevState.count4 - 1
                }))
            }
            else if (this.state.countforAgain4 >= 0 && this.state.countforAgain4 <= 30) {
                this.setState(prevState => ({
                    countforAgain4: prevState.countforAgain4 + 1
                }))
            }
            if (this.state.count === 0) {
                this.setState(prevState => ({
                    countforAlert: prevState.countforAlert - 1
                }))
            }
            if (this.state.count1 === 0) {
                this.setState(prevState => ({
                    countforAlert1: prevState.countforAlert1 - 1
                }))
            }
            if (this.state.count2 === 0) {
                this.setState(prevState => ({
                    countforAlert2: prevState.countforAlert2 - 1
                }))
            }
            if (this.state.count3 === 0) {
                this.setState(prevState => ({
                    countforAlert3: prevState.countforAlert3 - 1
                }))
            }
            if (this.state.count4 === 0) {
                this.setState(prevState => ({
                    countforAlert4: prevState.countforAlert4 - 1
                }))
            }
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Test;