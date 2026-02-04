function customRender(reactElement,mainContainer){
    /* domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        
        
    }

    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4",
        target:"_blank"
    },
    children:"Click Understand Concept"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)