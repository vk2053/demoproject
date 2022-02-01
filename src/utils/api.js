const studentsData = [
  {
    name: "Rajesh",
    age: "25",
    gender: "Male",
  },
  {
    name: "Ramini",
    age: "27",
    gender: "Female",
  },
  {
    name: "Suresh",
    age: "26",
    gender: "Male",
  },
];

// const getStudentsData = () => {
//   return new Promise((resolve, reject) => {
//     resolve(studentsData);
//     //   reject()
//   });
// };
const axios = require('axios');
const getStudentsData = () => {
  return axios.get('https://fir-project-8374f-default-rtdb.firebaseio.com/students.json')
  };

  const saveStudentData = (studentData) => {
    return axios.post('https://fir-project-8374f-default-rtdb.firebaseio.com/students.json',studentData)
    
  };

export { getStudentsData, saveStudentData };