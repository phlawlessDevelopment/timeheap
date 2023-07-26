export default class MaxHeap {

  constructor() {
    this.data = [];
    this.length = 0;

  }

  push(v) {
    this.calcPriority(v);
    this.data[this.length] = v;
    this.heapifyUp(this.length);
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const max = this.data[0];

    this.length--;

    if (this.length === 0) {
      this.length = 0;
      this.data = [];
      return max;
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return max;
  }


  heapifyDown(i) {
    const left = this.leftChild(i);
    const right = this.rightChild(i);
    if (i >= this.length || left >= this.length) return;

    if (this.data[left].priority > this.data[right].priority && this.data[i].priority > this.data[right].priority) {
      this.swap(i, right);
      this.heapifyDown(right);

    }
    else if (this.data[left].priority < this.data[right].priority && this.data[i].priority < this.data[right].priority) {
      this.swap(i, left);
      this.heapifyDown(left);
    }

  }
  heapifyUp(i) {
    if (i === 0) return;
    const parentIndex = this.parent(i);
    if (this.data[parentIndex].priority < this.data[i].priority) {
      this.swap(parentIndex, i);
      this.heapifyUp(parentIndex);
    }
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  find(id) {
    return this.data.filter(t => t.id === id)[0];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  print() {
    console.log(this.data);
  }
  head() {
    return this.data[0];
  }
  rest() {
    return this.data.slice(1, this.length);
  }

  daysLeftThisWeek() {
    const today = new Date();
    const currentDay = today.getDay();
    const daysLeft = 6 - currentDay;
    return daysLeft;
  }

  daysThisMonth() {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    return daysInMonth;
  }

  dateDiffToDays(diff){
      return diff / (1000 * 60 * 60 * 24) | 0;
  }

  calcPriority(t) {
    if (t.dueDate) {
      const remainingDays = this.dateDiffToDays(t.dueDate-Date.now());
      if(remainingDays<5){
        t.priority += 10 * 5-remainingDays;
      }
    }
    if (t.hoursPerWeek > 0) {
      const hoursRemaining = t.hoursPerWeek - t.hoursThisWeek;
      const hoursPerDay = hoursRemaining / this.daysLeftThisWeek();
      console.log(hoursRemaining, hoursPerDay)
      if(hoursPerDay>1)
        t.priority += 50 * hoursPerDay;
      else
        t.priortiy += 10 * hoursPerDay;
      console.log()
    }
    t.priority *= t.weight;
  }

}
