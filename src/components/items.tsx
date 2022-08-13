export default function Items() {
    return (
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
    );
}
