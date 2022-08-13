import { useState } from "react";
import "./App.css";

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
                    <div className="inputBox">
                        <input type="text" placeholder="請輸入待辦事項" />
                        <a>+</a>
                    </div>
                    <div className="todoList_list">
                        <ul className="todoList_tab">
                            <li>
                                <a href="#" className="active">
                                    全部
                                </a>
                            </li>
                            <li>
                                <a href="#">待完成</a>
                            </li>
                            <li>
                                <a href="#">已完成</a>
                            </li>
                        </ul>
                        <div className="todoList_items">
                            <ul className="todoList_item">
                                <li>
                                    <label className="todoList_label">
                                        <input className="todoList_input" type="checkbox" value="true" />
                                        <span>把冰箱發霉的檸檬拿去丟</span>
                                    </label>
                                    <a href="#">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </li>
                            </ul>
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
