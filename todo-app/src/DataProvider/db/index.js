class LocalStorageService {
  constructor() {
    if (!this.get()) {
      this.createStorage();
    }
  }
  createStorage() {
    localStorage.setItem("todos", JSON.stringify([]));
  }

  get() {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos);
  }

  update(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

export default LocalStorageService;
