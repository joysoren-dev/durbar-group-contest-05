function missingNumber(nums) {
  // Array te koyta number ache, seta holo n
  const n = nums.length;

  // 0 theke n porjonto sob number thakle total sum koto hoto
  const expectedSum = (n * (n + 1)) / 2;

  // Array te actually je number gula ache, segulor total sum ber kortesi
  let actualSum = 0;

  for (let num of nums) {
    // Prottekta number actualSum er sathe jog kortesi
    actualSum += num;
  }

  // Expected sum theke actual sum bad dile missing number peye jabo
  return expectedSum - actualSum;
}
