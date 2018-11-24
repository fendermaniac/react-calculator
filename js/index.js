var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function Button(props) {
  return (
    React.createElement("button", {
        type: "button",
        label: props.label,
        id: props.id,
        "data-type": props.type,
        onClick: props.handleClick },

      props.label));


}

function Display(props) {
  return (
    React.createElement("div", { result: props.result, id: "display", className: "screen" },
      props.result));


}var

Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this.state = {
      calc: [],
      result: "0" };

    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(Calculator, [{ key: "handleClick", value: function handleClick(
    e) {
      var input = e.target.textContent;
      var type = e.target.getAttribute("data-type");
      switch (input) {
        case "=":{
            this.setState({
              result: eval(this.state.calc.join("")).toString(),
              calc: [eval(this.state.calc.join("")).toString()] });

            break;
          }
        case "AC":{
            this.setState({
              calc: [],
              result: "0" });

            break;
          }
        case "0":{
            if (
            this.state.calc.length === 0 ||
            this.state.calc[this.state.calc.length - 1] === "+" ||
            this.state.calc[this.state.calc.length - 1] === "-" ||
            this.state.calc[this.state.calc.length - 1] === "*" ||
            this.state.calc[this.state.calc.length - 1] === "/")
            {
              return;
            } else {
              this.setState({
                calc: [].concat(_toConsumableArray(this.state.calc), [input]),
                result: [].concat(_toConsumableArray(this.state.calc), [input]) });

            }
            break;
          }
        case ".":{
            if (
            this.state.calc.length === 0 ||
            this.state.calc[this.state.calc.length - 1].includes("."))
            {
              return;
            } else
            {
              var newCalc = this.state.calc.slice();
              newCalc[newCalc.length - 1] = newCalc[newCalc.length - 1] + input;

              this.setState({
                calc: newCalc,
                result: [].concat(_toConsumableArray(this.state.calc), [input]) });

            }
            break;
          }
        case "+":
        case "-":
        case "*":
        case "/":
          {
            if (
            this.state.calc.length === 0)
            {
              return;
            } else
            if (
            this.state.calc[this.state.calc.length - 1] === "+" ||
            this.state.calc[this.state.calc.length - 1] === "-" ||
            this.state.calc[this.state.calc.length - 1] === "*" ||
            this.state.calc[this.state.calc.length - 1] === "/")
            {
              var _newCalc = this.state.calc.slice();
              _newCalc[_newCalc.length - 1] = input;
              this.setState({
                calc: _newCalc,
                result: _newCalc });
            } else
            {
              this.setState({
                calc: [].concat(_toConsumableArray(this.state.calc), [input]),
                result: [].concat(_toConsumableArray(this.state.calc), [input]) });

            }
          }
          break;
        default:{
            if (this.state.calc.length > 0) {
              var _newCalc2 = this.state.calc.slice();
              _newCalc2[_newCalc2.length - 1] = _newCalc2[_newCalc2.length - 1] + input;
              this.setState({
                calc: _newCalc2,
                result: _newCalc2 });
            } else
            {
              this.setState({
                calc: [].concat(_toConsumableArray(this.state.calc), [input]),
                result: [].concat(_toConsumableArray(this.state.calc), [input]) });

            }


          }}

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "frame" },
          React.createElement(Display, { className: "display", result: this.state.result }),
          React.createElement("div", { className: "button-row" },
            React.createElement(Button, {
              label: "AC",
              id: "clear",
              type: "action",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "/",
              id: "divide",
              type: "operator",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "*",
              id: "multiply",
              type: "operator",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "-",
              id: "subtract",
              type: "operator",
              handleClick: this.handleClick })),


          React.createElement("div", { className: "button-row" },
            React.createElement(Button, {
              label: "7",
              id: "seven",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "8",
              id: "eight",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "9",
              id: "nine",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "+",
              id: "add",
              type: "operator",
              handleClick: this.handleClick })),


          React.createElement("div", { className: "button-row" },
            React.createElement(Button, {
              label: "4",
              id: "four",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "5",
              id: "five",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "6",
              id: "six",
              type: "numeric",
              handleClick: this.handleClick })),


          React.createElement("div", { className: "button-row" },
            React.createElement(Button, {
              label: "1",
              id: "one",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "2",
              id: "two",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "3",
              id: "three",
              type: "numeric",
              handleClick: this.handleClick })),


          React.createElement("div", { className: "button-row" },
            React.createElement(Button, {
              label: "0",
              id: "zero",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: ".",
              id: "decimal",
              type: "numeric",
              handleClick: this.handleClick }),

            React.createElement(Button, {
              label: "=",
              id: "equals",
              type: "action",
              handleClick: this.handleClick }))));




    } }]);return Calculator;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));