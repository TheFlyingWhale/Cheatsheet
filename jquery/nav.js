const navChildren = [];

const gatherChildren = () => {
    document.getElementById('nav').childNodes.forEach(element => {
        element.nodeName === 'LI' ? navChildren.push({parent: element.childNodes[0], child: element.childNodes[2]}) : null;
    });
}

const assignToggle = () => {
    navChildren.forEach(element => {
        $(element.child).hide();
        $(element.parent).click((event) => {
            console.log(event);
            $(element.child).toggle();
            
        });
    });
}

gatherChildren();
assignToggle();

