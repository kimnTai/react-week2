import { useState } from "react";

export default function Input({ todoState: [item, setItem] }: { todoState: ITodoState }) {
    const [_new, setNew] = useState("");
    return (
        <div className="inputBox">
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={_new}
                onChange={({ target }) => setNew(target.value.trim())}
                onKeyDown={({ key }) => {
                    key === "Enter" && _new && setItem((pre) => [...pre, { checked: false, todo: _new }]);
                }}
            />
            <a onClick={() => _new && setItem((pre) => [...pre, { checked: false, todo: _new }])}>+</a>
        </div>
    );
}
