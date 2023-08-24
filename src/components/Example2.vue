<template>
  <div class="my-3 w-[30%] mx-auto" data-te-input-wrapper-init>
    <div
      v-if="!isBgModal"
      @click="countModalHanlder"
      class="py-2 px-5 text-xl z-10 text-white cursor-pointer bg-red-400 hover:bg-red-600 rounded-sm w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      Game
    </div>
    <div class="bgMain" v-if="isBgModal" @click="closeModalHandler"></div>
    <input
      type="number"
      placeholder="Введите количество чисел"
      id="exampleFormControlInputText"
      class="fixed z-[20] -top-10 peer block min-h-[auto] w-[30%] rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all ease-linear duration-200"
      :class="{ inputV: isInputCount }"
      v-model="inputCount"
    />
    <input
      type="number"
      placeholder="Введите числo"
      id="exampleFormControlInputText"
      class="fixed z-[20] -top-10 peer block min-h-[auto] w-[30%] rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all ease-linear duration-200"
      :class="{ inputV: isNumberModal }"
      v-model="inputNumber"
    />
    <div
      class="absolute -top-20 left-1/2 transform -translate-x-1/2 py-1 px-10 rounded-sm bg-blue-400 font-bold text-2xl text-white z-[10] hover:bg-blue-600 cursor-pointer transition-all ease-linear duration-300"
      :class="{
        btnV: +inputCount > 0 && isInputCount,
        incorrect__btnV: isInCorrectInputCountModalDown,
      }"
      @click="sendInputCountHandler"
    >
      OK
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isInputCount = ref(false);
const inputCount = ref("");
const inputNumber = ref("");
const isBgModal = ref(false);
const isInCorrectInputCountModalDown = ref(false);
const isNumberModal = ref(false);

const countModalHanlder = () => {
  isBgModal.value = true;
  isInputCount.value = true;
};

const closeModalHandler = () => {
  if (inputCount.value.toString().length > 0) {
    isInCorrectInputCountModalDown.value = true;
    return;
  }
  isInputCount.value = false;
  isInCorrectInputCountModalDown.value = false;
};

const sendInputCountHandler = () => {
  const isCount = inputCount.value.toString().length > 0;
  if (!isInCorrectInputCountModalDown.value && isCount) {
    isNumberModal.value = true;
    isInputCount.value = false;
  }
};

watch(inputCount, (newValue, oldValue) => {
  if (!/^\d+$/.test(newValue.toString())) {
    inputCount.value = oldValue;
  }
  if (+oldValue >= 0 && +oldValue <= 9 && /^\d+$/.test(oldValue.toString())) {
    inputCount.value = "";
  }
});
</script>

<style scoped>
#exampleFormControlInputText {
  border: 2px solid rgba(54, 179, 218, 0.534);
}
.inputV {
  top: 20px;
}
.btnV {
  top: 80px;
}
.incorrect__btnV {
  @apply bg-red-400;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
