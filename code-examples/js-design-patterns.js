// Singleton Pattern

const mySingleton = (function() {
  let instance;

  function instanceInit() {
    return {
      message: "I am THE instance"
    };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = instanceInit();
      }
      return instance;
    }
  };
})();

// Decorator Pattern

const log = (function() {
  let text = "";
  return {
    add(msg) {
      text += `${msg}\n`;
    },
    show() {
      console.log(text);
      text = "";
    }
  };
})();

class User {
  constructor(name) {
    this.name = name;
  }
  say() {
    log.add(`User: ${this.name}`);
  }
}

class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }
  say() {
    log.add(`Decorated User: ${this.name}, ${this.street}, ${this.city}`);
  }
}

// Factory Pattern

class FullTime {
  constructor() {
    this.hourly = "$12";
  }
}

class PartTime {
  constructor() {
    this.hourly = "$11";
  }
}

class Temporary {
  constructor() {
    this.hourly = "$10";
  }
}

class Contractor {
  constructor() {
    this.hourly = "$15";
  }
}

class Factory {
  constructor(id = 0) {
    this.id = id;
  }
  createEmployee(type) {
    let employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }
    const { id } = this;

    employee.type = type;
    employee.say = function() {
      log.add(`${this.type}: rate ${this.hourly}/hour created by Factory ID: ${id}`);
    };

    return employee;
  }
}

// Composite Pattern

class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }
  add(child) {
    this.children.push(child);
  }
  remove(child) {
    const { length } = this.children;

    for (let i = 0; i < length; i += 1) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  }
  getChild(i) {
    return this.children[i];
  }
  hasChildren() {
    return this.children.length > 0;
  }
}

function traverse(indent, node) {
  log.add(Array((indent += 1)).join("--") + node.name);

  for (let i = 0; i < node.children.length; i += 1) {
    traverse(indent, node.getChild(i));
  }
}

// Iterator Pattern

class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }
  first() {
    this.reset();
    return this.next();
  }
  next() {
    return this.items[this.index++];
  }
  hasNext() {
    return this.index <= this.items.length;
  }
  reset() {
    this.index = 0;
  }
  each(cb) {
    for (let i = this.first(); this.hasNext(); i = this.next()) {
      cb(i);
    }
  }
}

// Run
function run() {
  // Singleton Run
  const inst1 = mySingleton.getInstance();
  const inst2 = mySingleton.getInstance();

  log.add(`Same instance? ${inst1 === inst2}`);
  log.show();

  // Decorator Run
  const user = new User("Ismail");
  user.say();
  const decorated = new DecoratedUser(user, "Meet Okba", "Giza");
  decorated.say();

  log.show();

  // Factory Run
  const employees = [];
  const factory = new Factory();

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  for (let i = 0, len = employees.length; i < len; i += 1) {
    employees[i].say();
  }
  log.show();

  // Composite Run
  const tree = new Node("root");
  const left = new Node("left");
  const right = new Node("right");
  const leftleft = new Node("leftleft");
  const leftright = new Node("leftright");
  const rightleft = new Node("rightleft");
  const rightright = new Node("rightright");

  tree.add(left);
  tree.add(right);
  tree.remove(right); // note: remove
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree);

  log.show();

  // Iterator Run

  const items = ["one", 2, "circle", true, "Applepie"];
  const iter = new Iterator(items);

  iter.each(item => {
    log.add(item);
  });

  log.show();
}

run();
