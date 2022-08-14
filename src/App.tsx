import { useState } from "react";
import Input from "./components/input";
import Items from "./components/items";

export default function App() {
    const [tab, setTab] = useState("全部");
    const todoState = useState([{ checked: true, todo: "把冰箱發霉的檸檬拿去丟" }]);
    const createTab = () => {
        return ["全部", "待完成", "已完成"].map((v) => {
            return (
                <li key={v}>
                    <a className={tab === `${v}` ? "active" : ""} onClick={() => setTab(`${v}`)}>
                        {v}
                    </a>
                </li>
            );
        });
    };

    return (
        <div id="todoListPage" className="bg-half">
            <nav>
                <h1>
                    <a>ONLINE TODO LIST</a>
                </h1>
            </nav>
            <div className="container todoListPage vhContainer">
                <div className="todoList_Content">
                    <Input todoState={todoState} />
                    <div className="todoList_list">
                        <ul className="todoList_tab">{createTab()}</ul>
                        <div className="todoList_items">
                            <Items todoState={todoState} />
                            <div className="todoList_statistics">
                                <p> 5 個已完成項目</p>
                                <a>清除已完成項目</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
