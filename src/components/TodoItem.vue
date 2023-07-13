<template>
  <li>
    <span v-bind:class="{ done: todo.complited }">
      <input type="checkbox" v-on:change="todo.complited = !todo.complited" />
      <strong>{{ index + 1 }}</strong>
      {{ uppercase(todo.title) }}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)" class="remove">
      &times;
    </button>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  methods: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>
<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
input {
  margin-right: 1rem;
}
.remove {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
.done {
  text-decoration: line-through;
}
</style>
