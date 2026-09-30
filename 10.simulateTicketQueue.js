function simulateTicketQueue(commands) {
  // Waiting people ar served people er list rakhbo
  const queue = [];
  const served = [];

  for (const command of commands) {
    if (command.startsWith("join ")) {
      // Join command theke person er name ber kortesi
      const name = command.slice(5);

      // Already queue te na thakle take last e add kortesi
      if (!queue.includes(name)) {
        queue.push(name);
      }
    } else if (command.startsWith("leave ")) {
      // Leave command theke person er name ber kortesi
      const name = command.slice(6);

      // Queue te thakle take remove kortesi
      const index = queue.indexOf(name);

      if (index !== -1) {
        queue.splice(index, 1);
      }
    } else if (command === "serve") {
      // Queue empty na hole first person ke serve kortesi
      if (queue.length > 0) {
        served.push(queue.shift());
      }
    }
  }

  return {
    queue,
    served,
  };
}
