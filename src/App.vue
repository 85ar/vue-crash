<template>
  <div>
    <h1>Todo list</h1>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Купить хлеб",
          complited: false,
        },
        {
          id: 2,
          title: "Купить масло",
          complited: false,
        },
        {
          id: 3,
          title: "Купить сыр",
          complited: false,
        },
      ],
    };
  },
  components: {
    TodoList,
    AddTodo,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

<style></style>
