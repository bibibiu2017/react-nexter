type Story = {
  content: {
    heading: string,
    quote: string,
    description: string,
    buttonText: string,
  }
}

const storyData: Story = {
  content: {
    heading: "Happy Customers",
    quote: "The best decision of our lives",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!",
    buttonText: "Find your own home",
  },
};

export type {Story};
export {storyData};