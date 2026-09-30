function groupStudentsByGradeBand(students) {
  // Prottek grade er jonno empty array diye start kortesi
  const result = {
    A: [],
    B: [],
    C: [],
    F: [],
  };

  for (const student of students) {
    // Marks onujayi student er grade determine kortesi
    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }

  return result;
}
