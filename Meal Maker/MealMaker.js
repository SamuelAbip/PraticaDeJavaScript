const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers
  },
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  get mains() {
    return this._courses.mains
  },
  set mains(main) {
    this._courses.mains.push(main);
  },
  get desserts() {
    return this._courses.desserts
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(course, name, price) {
    const dish = { name, price }
    this._courses[course].push(dish);
  },
  getRandomDishFromCourse(course) {
    let dishes = this._courses[course];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let randomAppet = this.getRandomDishFromCourse("appetizers");
    let randomMain = this.getRandomDishFromCourse("mains");
    let randomDess = this.getRandomDishFromCourse("desserts");
    let totalPrice = randomAppet.price + randomMain.price + randomDess.price;
    return `Your course has ${randomAppet.name} for entry, ${randomMain.name} for main dish, ${randomDess.name} for dessert and cost ${totalPrice}`;
  }
}

menu.addDishToCourse("appetizers", "pão", 5);
menu.addDishToCourse("appetizers", "torrada", 7);
menu.addDishToCourse("appetizers", "crouton", 10);
menu.addDishToCourse("mains", "frango", 5);
menu.addDishToCourse("mains", "galinha", 7);
menu.addDishToCourse("mains", "frangalinha", 10);
menu.addDishToCourse("desserts", "açúcar", 5);
menu.addDishToCourse("desserts", "doce", 7);
menu.addDishToCourse("desserts", "docúcar", 10);

console.log(menu.generateRandomMeal());