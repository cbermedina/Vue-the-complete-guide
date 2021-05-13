const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      this.name = `${this.name}  Bermudez`;
    },
  },
  methods: {
    boxSelected(box) {
      alert(box);
      if (box === "A") this.boxASelected = !this.boxASelected;
      else if (box === "B") this.boxBSelected = !this.boxBSelected;
      else if (box === "C") this.boxCSelected = !this.boxCSelected;
    },
    resetInput() {
      this.name = "";
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
