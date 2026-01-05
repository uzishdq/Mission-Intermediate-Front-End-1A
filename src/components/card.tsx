interface ICard {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Card({
  title,
  description,
  children,
}: Readonly<ICard>) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
}
