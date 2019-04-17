import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: [],
      result: "0"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const input = e.target.textContent;
    const type = e.target.getAttribute("data-type");
    switch (input) {
      case "=": {
        this.setState({
          result: eval(this.state.calc.join("")).toString(),
          calc: [eval(this.state.calc.join("")).toString()]
        });
        break;
      }
      case "AC": {
        this.setState({
          calc: [],
          result: "0"
        });
        break;
      }
      case "0": {
        if (
          this.state.calc.length === 0 ||
          this.state.calc[this.state.calc.length - 1] === "+" ||
          this.state.calc[this.state.calc.length - 1] === "-" ||
          this.state.calc[this.state.calc.length - 1] === "*" ||
          this.state.calc[this.state.calc.length - 1] === "/"
        ) {
          return;
        } else {
          this.setState({
            calc: [...this.state.calc, input],
            result: [...this.state.calc, input]
          });
        }
        break;
      }
      case ".": {
        if (
          this.state.calc.length === 0 ||
          this.state.calc[this.state.calc.length - 1].includes(".") 
        ) {
          return;
        } 
        else {
          const newCalc = this.state.calc.slice();
            newCalc[newCalc.length - 1] = newCalc[newCalc.length - 1] + input;
          
          this.setState({
            calc: newCalc,
            result: [...this.state.calc, input]
          });
        }
        break;
      }
      case "+":
      case "-":
      case "*":
      case "/":
        {
          if (this.state.calc.length === 0 ) {
            return;
          } 
          else if (
            this.state.calc[this.state.calc.length - 1] === "+" ||
            this.state.calc[this.state.calc.length - 1] === "-" ||
            this.state.calc[this.state.calc.length - 1] === "*" ||
            this.state.calc[this.state.calc.length - 1] === "/"
          ) {
            const newCalc = this.state.calc.slice();
            newCalc[newCalc.length - 1] = input;
               this.setState({
              calc: newCalc,
              result: newCalc})
          }
          else {
            this.setState({
              calc: [...this.state.calc, input],
              result: [...this.state.calc, input]
            });
          }
        }
        break;
      default: {
        if (this.state.calc.length > 0) {
        const newCalc = this.state.calc.slice();
        newCalc[newCalc.length - 1] = newCalc[newCalc.length - 1] + input;
           this.setState({
              calc: newCalc,
           result: newCalc});
      }
        else {
         this.setState({
          calc: [...this.state.calc, input],
          result: [...this.state.calc, input]
        }); 
        }
        
        
      }
    }
  }
  render() {
    return (
      <div className="frame">
        <Display className="display" result={this.state.result} />
        <div className="button-row">
          <Button
            label={"AC"}
            id={"clear"}
            type={"action"}
            handleClick={this.handleClick}
          />
          <Button
            label={"/"}
            id={"divide"}
            type={"operator"}
            handleClick={this.handleClick}
          />
          <Button
            label={"*"}
            id={"multiply"}
            type={"operator"}
            handleClick={this.handleClick}
          />
          <Button
            label={"-"}
            id={"subtract"}
            type={"operator"}
            handleClick={this.handleClick}
          />
        </div>
        <div className="button-row">
          <Button
            label={"7"}
            id={"seven"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"8"}
            id={"eight"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"9"}
            id={"nine"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"+"}
            id={"add"}
            type={"operator"}
            handleClick={this.handleClick}
          />
        </div>
        <div className="button-row">
          <Button
            label={"4"}
            id={"four"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"5"}
            id={"five"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"6"}
            id={"six"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
        </div>
        <div className="button-row">
          <Button
            label={"1"}
            id={"one"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"2"}
            id={"two"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"3"}
            id={"three"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
        </div>
        <div className="button-row">
          <Button
            label={"0"}
            id={"zero"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"."}
            id={"decimal"}
            type={"numeric"}
            handleClick={this.handleClick}
          />
          <Button
            label={"="}
            id={"equals"}
            type={"action"}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
