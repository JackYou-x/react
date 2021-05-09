import { createContext, useContext } from 'react';
import { observable, computed, action } from 'mobx';

export interface Todo {
    id: number;
    value: string;
    computed: boolean;
}

export class Store {
    private Todos: Array<Todo> = observable([{
        id: +new Date(),
        value: 'case1',
        computed: false
    }, {
        id: +new Date() + 1,
        value: 'case2',
        computed: true
    }])
    public addTodo = action((todo: Todo) => {
        this.Todos.push(todo);
    })
    public removeTodo = action((todo: Todo) => {
        let index = this.Todos.indexOf(todo);
        this.Todos.splice(index, 1);
    })
    public updateTodo = action((todo: Todo, text: string) => {
        let index = this.Todos.indexOf(todo);
        this.Todos[index].value = text;
    })
    public changeComputed = action((id: number) => {
        this.Todos.some((todo: Todo) => todo.id === id && (todo.computed = !todo.computed));
    })
    @computed
    public get process(): string {
        return `${this.Todos.filter(todo => todo.computed).length}/${this.Todos.length}`;
    }
    @computed
    public get unfinishedTodo(): Array<Todo> {
        return this.Todos.filter(todo => !todo.computed)
    }
    @computed
    public get finishedTodo(): Array<Todo> {
        return this.Todos.filter(todo => todo.computed)
    }
}

const setContext = createContext({ store: new Store() });

export const Context = () => useContext(setContext);