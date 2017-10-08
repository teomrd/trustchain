import faker from "faker";

export const reviews = [
  {
    name: faker.name.findName(),
    title: faker.internet.email(),
    avatar: faker.image.avatar(),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
    isGood: false
  },
  {
    name: faker.name.findName(),
    title: faker.internet.email(),
    avatar: faker.image.avatar(),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
    isGood: true
  }
];
