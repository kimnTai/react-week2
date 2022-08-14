export default function Items({ todoState: [item, setItem] }: { todoState: ITodoState }) {
    return (
        <ul className="todoList_item">
            {item.map(({ todo, checked }, i) => {
                return (
                    <li key={i}>
                        <label className="todoList_label">
                            <input className="todoList_input" type="checkbox" checked={checked} onChange={() => {}} />
                            <span>{todo}</span>
                        </label>
                        <a onClick={() => console.log(123)}>X</a>
                    </li>
                );
            })}
        </ul>
    );
}
