export const distributeTasks = (records, agents) => {
  const result = [];
  const totalAgents = agents.length;

  records.forEach((record, index) => {
    const agentIndex = index % totalAgents;

    result.push({
      ...record,
      assignedTo: agents[agentIndex]._id,
    });
  });

  return result;
};
