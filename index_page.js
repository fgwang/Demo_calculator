var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var projectName = "javascript calculator";
localStorage.setItem("example_project", "JavaScript Calculator");

//React component
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      displayTop: "",
      displayBottom: "0",
      finallyKey: "AC",
      result: "" };

    _this.clickNumber = _this.clickNumber.bind(_this);
    _this.clickOpeator = _this.clickOpeator.bind(_this);
    _this.clickDot = _this.clickDot.bind(_this);
    _this.clickEqual = _this.clickEqual.bind(_this);
    _this.clear = _this.clear.bind(_this);return _this;
  }_createClass(App, [{ key: "clickNumber", value: function clickNumber(
    e) {
      var btnValue = e.target.innerHTML;
      if (this.state.finallyKey === "AC") {
        if (btnValue === "0") {
        } else {
          this.setState({
            displayTop: btnValue,
            displayBottom: btnValue,
            finallyKey: btnValue });

        }
      } else if (this.state.finallyKey === "=") {
        if (btnValue === "0") {
          this.setState({
            displayTop: "",
            displayBottom: "0",
            finallyKey: "AC",
            result: "" });

        } else {
          this.setState({
            displayTop: btnValue,
            displayBottom: btnValue,
            finallyKey: btnValue,
            result: "" });

        }
      } else if (
      this.state.finallyKey === "+" ||
      this.state.finallyKey === "-" ||
      this.state.finallyKey === "*" ||
      this.state.finallyKey === "/")
      {
        this.setState({
          displayTop: this.state.displayTop + btnValue,
          displayBottom: btnValue,
          finallyKey: btnValue });

      } else {
        if (this.state.displayBottom === "0") {
          this.setState({
            displayTop:
            this.state.displayTop.slice(0, this.state.displayTop.length - 1) +
            btnValue,
            displayBottom: this.state.displayBottom + btnValue,
            finallyKey: btnValue });

        } else {
          this.setState({
            displayTop: this.state.displayTop + btnValue,
            displayBottom: this.state.displayBottom + btnValue,
            finallyKey: btnValue });

        }
      }
    } }, { key: "clickOpeator", value: function clickOpeator(

    e) {
      var btnValue = e.target.innerHTML;
      if (this.state.finallyKey === "=") {
        this.setState({
          displayTop: this.state.result + btnValue,
          displayBottom: btnValue,
          finallyKey: btnValue,
          result: "" });

      } else if (
      this.state.finallyKey === "+" ||
      this.state.finallyKey === "-" ||
      this.state.finallyKey === "*" ||
      this.state.finallyKey === "/")
      {
        this.setState({
          displayTop:
          this.state.displayTop.slice(0, this.state.displayTop.length - 1) +
          btnValue,
          displayBottom: btnValue,
          finallyKey: btnValue });

      } else {
        this.setState({
          displayTop: this.state.displayTop + btnValue,
          displayBottom: btnValue,
          finallyKey: btnValue });

      }
    } }, { key: "clickDot", value: function clickDot(

    e) {
      var btnValue = e.target.innerHTML;
      var key = this.state.finallyKey;
      if (key === "AC" || key === "=") {
        this.setState({
          displayTop: "0.",
          displayBottom: "0.",
          finallyKey: btnValue,
          reuslt: "" });

      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        this.setState({
          displayTop: this.state.displayTop + "0.",
          displayBottom: "0.",
          finallyKey: btnValue });

      } else {
        var dotReg = /[.]/g;
        if (dotReg.test(this.state.displayBottom)) {
        } else {
          this.setState({
            displayTop: this.state.displayTop + btnValue,
            displayBottom: this.state.displayBottom + btnValue,
            finallyKey: btnValue });

        }
      }
    } }, { key: "clickEqual", value: function clickEqual(

    e) {
      if (this.state.displayTop.length < 1) {
        this.setState({
          displayTop: "=NAN",
          displayBottom: "NAN",
          finallyKey: e.target.innerHTML,
          result: "NAN" });

      } else if (this.state.displayTop.length === 1) {
        if (
        this.state.finallyKey === "+" ||
        this.state.finallyKey === "-" ||
        this.state.finallyKey === "*" ||
        this.state.finallyKey === "/")
        {
          this.setState({
            displayTop: "=NAN",
            displayBottom: "NAN",
            finallyKey: e.target.innerHTML,
            result: "NAN" });

        } else {
          this.setState({
            displayTop: "=" + this.state.displayTop,
            displayBottom: this.state.displayTop,
            finallyKey: e.target.innerHTML,
            result: this.state.displayTop });

        }
      } else {
        var regFirstNumb = /^\d/;
        var regEndNumb = /\d$/;
        var regNAN = /NAN/;
        if (regNAN.test(this.state.displayTop)) {
          this.setState({
            displayTop: this.state.displayTop + "=" + "NAN",
            displayBottom: "NAN",
            finallyKey: e.target.innerHTML,
            result: "NAN" });

        } else if (regFirstNumb.test(this.state.displayTop)) {
          if (regEndNumb.test(this.state.displayTop)) {
            var calc = eval(this.state.displayTop);
            console.log(calc);
            this.setState({
              displayTop: this.state.displayTop + "=" + calc,
              displayBottom: calc,
              finallyKey: e.target.innerHTML,
              result: calc });

          } else {
            var strCopy = this.state.displayTop.slice(0, -1);
            var _calc = eval(strCopy);
            this.setState({
              displayTop: this.state.displayTop + "=" + _calc,
              displayBottom: _calc,
              finallyKey: e.target.innerHTML,
              result: _calc });

          }
        } else {
          if (
          this.state.displayTop.slice(0, 1) === "/" ||
          this.state.displayTop.slice(0, 1) === "*")
          {
          } else if (this.state.displayTop.slice(0, 1) === "-") {
            var _strCopy = "0" + this.state.displayTop;
            if (regEndNumb.test(_strCopy)) {
              var _calc2 = eval(_strCopy);
              this.setState({
                displayTop: this.state.displayTop + "=" + _calc2,
                displayBottom: _calc2,
                finallyKey: e.target.innerHTML,
                result: _calc2 });

            } else {
              var strCopy1 = _strCopy.slice(0, -1);
              var _calc3 = eval(strCopy1);
              this.setState({
                displayTop: this.state.displayTop + "=" + _calc3,
                displayBottom: _calc3,
                finallyKey: e.target.innerHTML,
                result: _calc3 });

            }
          } else {
            var _strCopy2 = this.state.displayTop.slice(1);
            var _calc4 = eval(_strCopy2);
            this.setState({
              displayTop: this.state.displayTop + "=" + _calc4,
              displayBottom: _calc4,
              finallyKey: e.target.innerHTML,
              result: _calc4 });

          }
        }
      }
    } }, { key: "clear", value: function clear(

    e) {
      this.setState({
        displayTop: "",
        displayBottom: "0",
        finallyKey: e.target.innerHTML,
        result: "" });

    } }, { key: "render", value: function render()
    {
      var inactiveStyle = {
        width: "50px",
        height: "30px",
        backgroundColor: "darkblack",
        border: "solid 1px black" };

      return (
        React.createElement("div", { id: "container" },
          React.createElement("div", { className: "display-block" },
            React.createElement("div", { className: "topBox" },
              React.createElement(Display, {
                idText: "displayTop",
                text: "top",
                display: this.state.displayTop })),


            React.createElement("div", { id: "display", className: "bottomBox" },
              React.createElement(Display, {
                idText: "displayBottom",
                text: "bottom",
                display: this.state.displayBottom }))),



          React.createElement("div", { id: "clear", className: "ac-key", onClick: this.clear }, "AC"),


          React.createElement(Opeator, { idText: "divide", text: "/", clickOpeator: this.clickOpeator }),
          React.createElement(Opeator, { idText: "multiply", text: "*", clickOpeator: this.clickOpeator }),
          React.createElement(Opeator, { idText: "subtract", text: "-", clickOpeator: this.clickOpeator }),
          React.createElement(Opeator, { idText: "add", text: "+", clickOpeator: this.clickOpeator }),
          React.createElement("div", { id: "numberBox" },
            React.createElement(Number, { idText: "seven", text: "7", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "eight", text: "8", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "nine", text: "9", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "four", text: "4", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "five", text: "5", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "six", text: "6", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "one", text: "1", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "two", text: "2", clickNumber: this.clickNumber }),
            React.createElement(Number, { idText: "three", text: "3", clickNumber: this.clickNumber })),

          React.createElement(Number, { idText: "zero", text: "0", clickNumber: this.clickNumber }),
          React.createElement("div", { id: "decimal", onClick: this.clickDot }, "."),


          React.createElement("div", { id: "equals", onClick: this.clickEqual }, "="),


          React.createElement("footer", null, "Designed and Code By ",
            React.createElement("br", null), " ", React.createElement("a", { href: "#" }, "Fgwang"))));



    } }]);return App;}(React.Component);var


Display = function (_React$Component2) {_inherits(Display, _React$Component2);
  function Display(props) {_classCallCheck(this, Display);return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this,
    props));
  }_createClass(Display, [{ key: "render", value: function render()
    {
      return React.createElement("p", { id: this.props.idText }, this.props.display);
    } }]);return Display;}(React.Component);var


Opeator = function (_React$Component3) {_inherits(Opeator, _React$Component3);
  function Opeator(props) {_classCallCheck(this, Opeator);return _possibleConstructorReturn(this, (Opeator.__proto__ || Object.getPrototypeOf(Opeator)).call(this,
    props));
  }_createClass(Opeator, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", {
            id: this.props.idText,
            className: "opeator",
            onClick: this.props.clickOpeator },

          this.props.text));


    } }]);return Opeator;}(React.Component);var


Number = function (_React$Component4) {_inherits(Number, _React$Component4);
  function Number(props) {_classCallCheck(this, Number);return _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this,
    props));
  }_createClass(Number, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", {
            id: this.props.idText,
            className: "number",
            onClick: this.props.clickNumber },

          this.props.text));


    } }]);return Number;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("calc-app"));