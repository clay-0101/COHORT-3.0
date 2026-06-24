let root = document.querySelector('#root')

let h1 = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
        "Hello This is Heading 2"))


let rDom = ReactDOM.createRoot(root)
rDom.render(h1)