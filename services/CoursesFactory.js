courseRoster.factory('CoursesFactory', function CoursesFactory() {
    var factory = {};
    factory.courses = [];
    factory.addCourse = function() {
        factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
        factory.courseName = null;
    };

//This is alternative code if you don't want to create another factory (UtilitiesFactory) in order to find course by id
    // factory.findById = function(id) {
    //     for (var i= 0; i < factory.courses.length; i++) {
    //         if (factory.courses[i].id == id) {
    //             return factory.courses[i];
    //         }
    //     }
    //     return null;
    // };
    return factory;
});
