const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value == "") this.fullname = "";
    //   else {
    //     this.fullname = value + "  Cesar Bermudez";
    //   }
    // },
    // lastName()
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
