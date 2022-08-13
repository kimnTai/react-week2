import { useState } from "react";
import Input from "./components/input";
import Items from "./components/items";

export default function App() {
    return (
        <div id="todoListPage" className="bg-half">
            <nav>
                <h1>
                    <a>ONLINE TODO LIST</a>
                </h1>
            </nav>
            <div className="container todoListPage vhContainer">
                <div className="todoList_Content">
                    <Input />
                    <div className="todoList_list">
                        <ul className="todoList_tab">
                            <li>
                                <a className="active">全部</a>
                            </li>
                            <li>
                                <a>待完成</a>
                            </li>
                            <li>
                                <a>已完成</a>
                            </li>
                        </ul>
                        <Items />
                    </div>
                </div>
            </div>
        </div>
    );
}
