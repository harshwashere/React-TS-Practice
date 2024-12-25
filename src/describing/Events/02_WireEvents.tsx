export default function ColorSwitch(onChangeColor: any) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}
