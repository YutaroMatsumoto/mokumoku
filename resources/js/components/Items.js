import React from 'react';

function Items(props) {
    return props.items.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
            </tr>
        );
    });
}

export default Items;