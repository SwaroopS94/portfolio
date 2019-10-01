export default {
  mounted() {
    console.log("Mounting Mixin");
  },
  methods: {
    animateBtn(callback, ref) {
      console.log("Calling animate");
      let element = this.$refs[ref];
      element.classList.add('animate-btn-click');
      setTimeout(() => {
        element.classList.remove('animate-btn-click');
        callback.call(this);
      },700);
    }
  }
}