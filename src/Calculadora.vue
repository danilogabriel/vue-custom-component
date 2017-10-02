<template>
  <div class="card">
    <div class="card-header">
      Calculadora de Intereses
    </div>
    <div class="card-body">
      <h4 class="card-title">Aqui dentro se produce la magia</h4>

      <div class="card-text">
        <div class="form-group">
          <label>Valor 1</label>
          <input type="text" class="form-control" v-model="valor1">
        </div>

        <div class="form-group">
          <label>Valor 2</label>
          <input type="text" class="form-control" v-model="valor2">
        </div>
        <div>
          Resultado: {{ sumar }}
        </div>

      </div>
      <a href="#" class="btn btn-primary" @click="calcular">Calcular</a>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'valor1',
    'valor2'
  ],
  data() {
    return {
      msg: 'Bienvenido'
    }
  },
  computed:{
    sumar(){
      return parseInt(this.valor1) + parseInt(this.valor2)
    }
  },
  methods: {
    calcular() {
      this.$emit("calculado", this.sumar)
    }
  }
}
</script>

<style>

</style>
