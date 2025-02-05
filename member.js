function skillsMember() {
  var member = {
    name: "Pete",
    age: 30,
    skills: ["JavaScript", "HTML", "CSS"],
    sayHello: function() {
      console.log("Hello, my name is " + this.name);
    }
  };

  return member;
}