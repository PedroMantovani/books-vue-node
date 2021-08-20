<template>
  <section id="app" class="container mt-3">
      <h1>Book Registration</h1>
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
      >{{ mensagem.texto }}</b-alert
    >
    <b-card>
      <b-form-group label="Titulo:">
        <b-form-input
          type="text"
          size="lg"
          v-model="book.titulo"
          placeholder="Informe o Titulo"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Autor:">
        <b-form-input
          type="text"
          size="lg"
          v-model="book.autor"
          placeholder="Informe o Autor"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Editora:">
        <b-form-input
          type="text"
          size="lg"
          v-model="book.editora"
          placeholder="Informe o Editora"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Edição:">
        <b-form-input
          type="text"
          size="lg"
          v-model="book.edicao"
          placeholder="Informe o Edição"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterLivros" size="lg" variant="success" class="ml-2"
        >Obter Livros</b-button
      >
    </b-card>

    <hr />

    <b-list-group>
      <b-list-group-item v-for="(book, id) in books" :key="id">
        <strong>Titulo: </strong> {{ book.titulo }}<br />
        <strong>Autor: </strong> {{ book.autor }}<br />
        <strong>Editora: </strong> {{ book.editora }}<br />
        <strong>Edição: </strong> {{ book.edicao }}<br />
        <strong>ID: </strong> {{ book._id }}<br />
        <b-button variant="warning" size="lg" class="mr-3" @click="carregar(id)"
          >Carregar</b-button
        >
        <b-button variant="danger" size="lg" @click="excluir(id)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      id: null,
      books: [],
      book: {
        _id: "",
        titulo: "",
        autor: "",
        editora: "",
        edicao: "",
      },
    };
  },
  methods: {
    limpar() {
      this.mensagens = [];
      this.book.titulo = "";
      this.book.autor = "";
      this.book.editora = "";
      this.book.edicao = "";
      this.id = null;
    },
    carregar(id) {
      this.id = id;
      this.book = { ...this.books[id] };
    },
    excluir(id) {
      this.$http
        .delete(`livro/${this.books[id]._id}`)
        .then(() => this.limpar())
        .catch(() => {
          this.limpar();
          this.mensagens.push({
            texto: "Problema para excluir!",
            tipo: "danger",
          });
        });
    },
    salvar() {
      const metodo = this.id ? "put" : "post";
      const finalUrl = this.id ? this.books[this.id]._id : "";
      this.$http[metodo](`livro/${finalUrl}`, {
        titulo: this.book.titulo,
        autor: this.book.autor,
        editora: this.book.editora,
        edicao: this.book.edicao,
      }).then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
      });
    },
    obterLivros() {
      this.$http.get("livro").then((res) => {
        this.books = res.data.listBook;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

button {
    margin-left: 1%;
}
</style>