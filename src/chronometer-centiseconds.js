class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);

    if(printTimeCallback !== undefined){
      for(let i=0; i<100; i++){
        setInterval(printTimeCallback, 1000);
      }
    }
  }

  getMinutes() {
    return Math.floor((this.currentTime/100)/60);
  }

  getSeconds() {
    return (this.currentTime/100)%60;
  }

  getCentiseconds() {
    return Math.round(Math.floor(this.currentTime%100));
  }

  computeTwoDigitNumber(value) {
    console.log('value', value);
    if(value >= 10){
      console.log('haha', value.toString().slice(0,2))
      return value.toString().slice(0,2);
    }
    return '0'+ value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) +":"+ this.computeTwoDigitNumber(this.getSeconds()) + "."
    + this.computeTwoDigitNumber(this.getCentiseconds());
  }
}
