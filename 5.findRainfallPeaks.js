function findRainfallPeaks(rainfall) {
  // Prothom ar last day peak hote pare na, tai majher day gula check kortesi
  const peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    // Current rainfall dui pasher rainfall er cheye beshi kina check kortesi
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      // Index 0-based, tai actual day number pete 1 add kortesi
      peaks.push(i + 1);
    }
  }

  return peaks;
}
