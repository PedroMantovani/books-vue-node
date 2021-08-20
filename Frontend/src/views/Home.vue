<template>
  <div>
    <Nav />
    <FormBook />
  </div>
</template>

<script>
import FormBook from '@/components/FormBook.vue'
import Nav from '@/components/Nav.vue'

export default {
  components: { FormBook, Nav }
}
</script>
