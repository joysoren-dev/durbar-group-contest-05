function swapKeysAndValues(obj) {
  // Notun object e value ke key ar key ke value hisebe rakhbo
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    // Same value abar ashle pore asa key diye overwrite hobe
    result[value] = key;
  }

  return result;
}
