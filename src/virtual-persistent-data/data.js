const defaultDate = new Date();

const getDateAddedInDays = amount => {
  let result = new Date();
  result.setDate(defaultDate.getDate() + amount);
  return result;
}

export const statusList = ['TODO', 'DONE', 'LATE'];

export function getTaskPreBuiltList() {
  const taskList = [
    {
      name: 'Buy milk',
      description: 'Buy a gallon of milk at near market',
      when: getDateAddedInDays(1).toJSON(),
      status: 'TODO',
      createdAt: getDateAddedInDays(0).toJSON()
    },

    {
      name: 'Create a little app',
      description: `Create a little frontend app to be validated.
                        The App will be validated by Aubay technical validation guy.`,
      when: getDateAddedInDays(2).toJSON(),
      status: 'DONE',
      createdAt: getDateAddedInDays(0).toJSON()
    },

    {
      name: 'Improve personal project',
      description: `Insert the new feature thought on this weekend
            
            The feature consists in create a new status to failed messages`,
      when: getDateAddedInDays(3).toJSON(),
      status: 'TODO',
      createdAt: getDateAddedInDays(0).toJSON()
    },

    {
      name: 'Irrigate plants',
      description: `Irrigate my plants`,
      when: getDateAddedInDays(1).toJSON(),
      status: 'TODO',
      createdAt: getDateAddedInDays(0).toJSON()
    }
  ];

  return taskList;
}
