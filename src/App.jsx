import { useState } from 'react';
import { questions } from './questions';

function App() {
  const [activeId, setActiveId] = useState(questions[0].id);
  const active = questions.find((q) => q.id === activeId);
  const ActiveComponent = active.Component;

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <h1>React Bootcamp</h1>
        <nav>
          {questions.map((q) => (
            <button
              key={q.id}
              className={q.id === activeId ? 'active' : ''}
              onClick={() => setActiveId(q.id)}
            >
              {q.title}
            </button>
          ))}
        </nav>
      </aside>
      <main className="app-main">
        <h2>{active.title}</h2>
        <p>
          Read <code>src/questions/{active.id}/README.md</code> for the full
          scenario, task, and jargon box. Edit{' '}
          <code>src/questions/{active.id}/Starter.jsx</code> to complete it.
        </p>
        <div className="question-preview">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
