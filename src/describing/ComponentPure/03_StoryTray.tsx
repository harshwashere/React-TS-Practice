type Story = {
  id: string;
  name: string;
};

type StoryTrayProps = {
  stories: Story[];
};

export default function StoryTray({ stories }: StoryTrayProps) {
  let newStories = [
    ...stories,
    {
      id: "create",
      name: "Create Story",
    },
  ];
  return (
    <ul style={{ listStyleType: "none" }}>
      {newStories.map((story) => (
        <li key={story.id}>{story.name}</li>
      ))}
    </ul>
  );
}
