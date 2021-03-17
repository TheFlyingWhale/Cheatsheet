const gatherChildren = () => {
    const navChildren = [];
    document.getElementById('nav').childNodes.forEach(element => {
        element.nodeName === 'LI' ? navChildren.push({parent: element.childNodes[0], child: element.childNodes[2]}) : null;
    });
    return navChildren;
}

const assignToggle = (arr) => {
    arr.forEach(element => {
        $(element.child).hide();
        $(element.parent).click((event) => {
            console.log(event);
            $(element.child).toggle();
            
        });
    });
}

assignToggle(gatherChildren());

