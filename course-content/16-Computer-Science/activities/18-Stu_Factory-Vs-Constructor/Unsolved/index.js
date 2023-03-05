// TODO: Refactor the class to a factory function.

// class Lesson {
//   constructor() {
//     this.title = 'Unit 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

function createLesson (title, description) {
  const lesson = {
    title: title,
    description: description
  }

  return {
    information: function () {
      console.log('lesson title is '+ lesson.title + ' description ' + lesson.description);
    }
  }
}

const csForJS = createLesson('Unit 17 - Computer Science', 'CS for JS');
csForJS.information();
