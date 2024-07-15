

function List() {

    const fruits = [{ name: 'apple', cal: 95 }, { name: 'banana', cal: 45 }, { name: 'mango', cal: 105 }, { name: 'pineapple', cal: 37 }];

    const listItems = fruits.map(fruit => <li key={fruit.key}>{fruit.name}: &nbsp; <b>{fruit.cal}</b> </li>)

    return (<ul>{listItems}</ul>);
}

export default List

