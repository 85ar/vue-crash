<template>
  <div>
    <h2>Todo list</h2>
    <router-link class="router-link" to="/">Home</router-link>
    <hr />
    <AddTodo v-on:add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="complited">Complited</option>
      <option value="not-complited">Not complited</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-bind:todos="filteredTodos"
      v-on:remove-todo="removeTodo"
      v-else-if="filteredTodos.length"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "./../components/TodoList.vue";
import AddTodo from "./../components/AddTodo.vue";
import Loader from "./../components/Loader.vue";
export default {
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  // watch: {
  //   filter(value) {
  //     console.log('value', value);
  //   }
  // },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "complited") {
        return this.todos.filter((h) => h.complited);
      }
      if (this.filter === "not-complited") {
        return this.todos.filter((h) => !h.complited);
      }
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
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
<style scoped>
.router-link {
  display: flex;
  justify-content: center;
}
</style>
