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
    const currentDay = today.getDay(); // Get the current day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)

    // Calculate the number of days left until Sunday (6 - Saturday, 0 - Sunday)
    const daysLeft = 6 - currentDay;

    return daysLeft;
  }

  daysThisMonth() {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    return daysInMonth;
  }

  calcPriority(t) {
    if (t.dueDate) {
      console.log('dist', (t.dueDate - Date.now()) / (1000 * 60 * 60 * 24) | 0);
      t.priority += t.weight * (this.daysThisMonth() - (t.dueDate - Date.now()) / (1000 * 60 * 60 * 24) | 0);
    }
    if (t.hoursPerWeek > 0) {
      t.priority += t.weight * ((7 - this.daysLeftThisWeek()) - (t.hoursPerWeek - t.hoursThisWeek));
    }
  }

}
