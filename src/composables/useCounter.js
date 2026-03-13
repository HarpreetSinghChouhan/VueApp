import { onMounted, onUnmounted, ref } from "vue";
import { getDate } from "vuetify/lib/components/VCalendar/util/timestamp";
export function useCounte() {
  const count = ref(1);
  function multiply2() {
    count.value = count.value * 2;
  }
  function devide2() {
    count.value = count.value / 2;
  }
  return { count, multiply2, devide2 };
}

export function useMouse() {
  const x = ref(0);
  const y = ref(0);
//   const z = ref(0);
  const MousePosition = (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
   
  };
  onMounted(() => window.addEventListener("mousemove", MousePosition));
  onUnmounted(() => window.addEventListener("mousemove", MousePosition));
  return { x, y, MousePosition };
} 
  export function useDate(){
    // console.log("Hello Every One")
    const date = ref('');
    function Date2(){
    //    date.value = new Date();
       const Date3 = new Date();
        date.value = Date3.toLocaleString();
    
    //   date.value = getDate();
    }
    return { date, Date2 };
  }