/// <reference types="vite/client" />

interface ITodo {
    checked: boolean;
    todo: string;
}

type ITodoState = [ITodo[], React.Dispatch<React.SetStateAction<ITodo[]>>];
