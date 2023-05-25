<script setup>
import {ref, computed} from 'vue'
const name = "Vue dinámico"; //Esta constante de nombre name envía un valor
const estilos = "color: blue"

let contador = ref(0);
const arrayNums = ref([])
const handleClick = () => { // EVENTOS
        console.log("me diste cick");
    };

const arrayFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
        },
    ];

const objFruta =         {
            name: "banano",
            price: "$5.00",
            description: "Un Banano y ya",
        }

        const incrementar = ()=>{
            console.log('aumentar contador')
            contador.value++
        }

        const disminuir = ()=>{
            console.log('disminuye contador')
            contador.value--
        }
        const reset = ()=>{
            console.log('reinicia contador')
            contador.value = 0
        }
        const add = ()=>{
            arrayNums.value.push(contador.value) //Aqui agregamos los nums al array con el push de JS
        }
        const blockNumber = computed(() => {
            const number = arrayNums.value.find((num) => num === contador.value);
            return number || number === 0;
        });

</script>
<template>
  <h1>
     Hola Pa {{ name }}  <!--Con las llaves dobles traemos lo que tiene name (interpolación de texto) comunicar el script con el template-->
  </h1>
  <h2 :style="estilos">Coloreando con azul (V- bind)</h2>  <!--V-bind nos permite colocar la interpolación de texto en los atributos-->
        <h2 :class="contador >= 0 ? 'positive' : 'negative'">{{ contador }}</h2> <!---REACTIVIDAD-->

    <ul> <!-- Estamos recorriendo un array llamado arrayFrutas, por cada "fruta" que contenga el array mostrar nombre precio y descripcion-->
        <li v-for="fruta in arrayFrutas" :key="name">
            {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
        </li>
    </ul>

    <ul>
      <li v-for="value in objFruta" :key="value">
          {{ value }}
      </li>
    </ul>

        {{ arrayNums }}
        <h1>Hola Evento {{ name }}!</h1>  
        <button @click="incrementar">Aumentar</button>
        <button @click="disminuir">Disminuir</button>
        <button @click="reset">Reset</button>
        <button @click="add" :disabled="blockNumber">Agregálo</button>
</template>
<style>
h1{
  color: red;
}
.negative {
    color: red;
}

.positive {
    color: green;
}</style>
