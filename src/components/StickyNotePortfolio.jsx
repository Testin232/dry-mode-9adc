import { useState } from 'react';

const tiles = [
  {
    id: 1,
    title: 'Optimization',
    intro: 'Speed up your processes.',
    details: 'Scripting, automation, and system analysis to remove bottlenecks.',
    color: 'bg-yellow-200'
  },
  {
    id: 2,
    title: '3D Modeling',
    intro: 'From idea to print.',
    details: 'CAD, slicing, and rapid prototyping for real-world results.',
    color: 'bg-green-200'
  },
  {
    id: 3,
    title: 'Software Dev',
    intro: 'Custom-built tools.',
    details: 'Web apps and integrations to streamline your workflow.',
    color: 'bg-blue-200'
  }
];

export default function StickyNotePortfolio() {
  const [openTile, setOpenTile] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          onClick={() => setOpenTile(openTile === tile.id ? null : tile.id)}
          className={`p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${tile.color}`}
        >
          <h2 className="text-xl font-bold">{tile.title}</h2>
          <p className="text-sm">{tile.intro}</p>
          {openTile === tile.id && <p className="mt-2 text-sm">{tile.details}</p>}
        </div>
      ))}
    </div>
  );
}
