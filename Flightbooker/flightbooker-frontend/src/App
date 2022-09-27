<template>
  <header>
    <div class="wrapper">
      <Title></Title>
    </div>
  </header>

  <main>
    <div class="seatmap">
      <SeatMap></SeatMap>
    </div>
    <div>
      <Button @click="showModal" ></Button>
      <Modal v-show="isModalVisible"
      @close="closeModal" />

    </div>
    
  </main>

</template>

<script setup>
import Title from './components/Title.vue';
import SeatMap from './components/SeatMap.vue';
import Button from './components/Button.vue';
</script>

<script>
import Modal from './components/Modal.vue';
  export default { 
    components: {
      Modal,
    },
    data() {
      return{
        isModalVisible: false,
      };
    },

    methods: {
      showModal() {
        this.isModalVisible=true;
      },
      closeModal(){
        this.isModalVisible = false;
        this.$store.state.seatList.forEach(seat => {
          if (seat.status == "selected"){
            seat.status="booked"
            console.log(this.$store.state.seatList[3]);//delete later
          }
        });
        this.$store.dispatch('resetCount');
      },
    }

  }
</script>


<style scoped>
header {
  line-height: 1.5;
}
main {
  padding-top: 10px;
  padding-bottom: 10px;
}
.seatmap{
  padding-bottom: 10px;
}

 @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: top;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<style>
  html,body,button {
    font-family: Verdana, sans-serif;
  }
</style>
