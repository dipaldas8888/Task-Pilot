export const distributeTasks = (records, agents) => {
  const totalAgents = agents.length;

  return records.map((record, index) => {
    const agentIndex = index % totalAgents;

    return {
      firstName: record.FirstName,
      phone: record.Phone.toString(),
      notes: record.Notes,
      assignedTo: agents[agentIndex]._id,
    };
  });
};
