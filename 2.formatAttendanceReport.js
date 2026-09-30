function formatAttendanceReport(students) {
  // Prottek student er jonno attendance report format kortesi
  return students.map((student) => {
    // Present ar total diye attendance percentage ber kortesi
    const percentage = Math.round((student.present / student.total) * 100);

    // Percentage onujayi student er status set kortesi
    let status;

    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    // Student er information gula formatted string e return kortesi
    return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
  });
}
