function generateProfileCard(user) {
  // Name na thakle Anonymous use kortesi
  const name = user.name ?? "Anonymous";

  // Address ba city na thakle Unknown use kortesi
  const city = user.address?.city ?? "Unknown";

  // Social ba followers na thakle 0 use kortesi
  const followers = user.social?.followers ?? 0;

  // Shob information formatted string e return kortesi
  return `${name} | ${city} | followers: ${followers}`;
}
