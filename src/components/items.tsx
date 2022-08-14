export default function Items({ todoState: [item, setItem] }: { todoState: ITodoState }) {
    return (
        <ul className="todoList_item">
            {item.map(({ todo, checked }, i) => {
                return (
                    <li key={i}>
                        <label className="todoList_label">
                            <input
                                className="todoList_input"
                                type="checkbox"
                                checked={checked}
                                onChange={() => {
                                    setItem((pre) => {
                                        pre[i].checked = !checked;
                                        return [...pre];
                                    });
                                }}
                            />
                            <span>{todo}</span>
                        </label>
                        <a onClick={() => setItem((pre) => pre.filter((_, _i) => _i !== i))}>刪除</a>
                    </li>
                );
            })}
        </ul>
    );
}
