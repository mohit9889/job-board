export const getRandomBgClass = () => {
  const bgClasses = [
    { bg: "bg-violet", text: "text-white", color: "violet" },
    { bg: "bg-red", text: "text-white", color: "red" },
    { bg: "bg-yellow", text: "text-black", color: "yellow" },
  ];
  const randomIndex = Math.floor(Math.random() * bgClasses.length);
  return bgClasses[randomIndex];
};
