class Sorter {
  constructor() {
      this.arr = [];
      this.compareFunction = this.compareNumbers;
  }

  add(element) {
      this.arr.push(element);
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
      return this.arr.length;
  }

  toArray() {
      return this.arr;
  }

  compareNumbers(a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
  }

    sort(indices) {

        let self = this;

        indices = indices.sort(this.compareNumbers);

        let sortedArray = this.arr.filter(function(item, index){

            if (indices.some(function(element){
                return index===element
            })
            ) {
                return true;
            }
        }).sort(self.compareFunction);

        indices.forEach(function(item, index){
            self.arr[item] = sortedArray[index];
        });
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;