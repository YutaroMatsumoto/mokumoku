import React from 'react';

function Items() {
    return (
        <tr key={items.id}>
            <td>{items.name}</td>
        </tr>
    )
}

export default Items;