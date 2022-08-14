import { useState } from "react";
import Input from "./components/input";
import Items from "./components/items";

export default function App() {
    const [tab, setTab] = useState("全部");
    const [todo, setTodo] = useState([
        { checked: false, todo: "把冰箱發霉的檸檬拿去丟" },
        { checked: true, todo: "打電話叫媽媽匯款給我" },
    ]);

    const _todo =
        { 待完成: todo.filter(({ checked }) => !checked), 已完成: todo.filter(({ checked }) => checked) }[tab] || todo;

    return (
        <div id="todoListPage" className="bg-half">
            <nav>
                <h1>
                    <a>ONLINE TODO LIST</a>
                </h1>
            </nav>
            <div className="container todoListPage vhContainer">
                <div className="todoList_Content">
                    <Input todoState={[todo, setTodo]} />
                    <div className="todoList_list">
                        <ul className="todoList_tab">
                            {["全部", "待完成", "已完成"].map((v) => (
                                <li key={v}>
                                    <a className={tab === `${v}` ? "active" : ""} onClick={() => setTab(`${v}`)}>
                                        {v}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="todoList_items">
                            <Items todoState={[_todo, setTodo]} />
                            <div className="todoList_statistics">
                                <p> {todo.filter(({ checked }) => checked).length} 個已完成項目</p>
                                <a onClick={() => setTodo((pre) => pre.filter(({ checked }) => !checked))}>
                                    清除已完成項目
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
