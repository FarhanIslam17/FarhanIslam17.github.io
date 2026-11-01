let _f=document.createElement('link');_f.rel='icon';_f.href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23061011'/%3E%3Ctext x='5' y='22' font-family='monospace' font-size='14' fill='%23e8b26f'%3EF/I%3C/text%3E%3C/svg%3E";document.head.appendChild(_f);
import React from 'react';
import { createRoot } from 'react-dom/client';
import { FileRouter } from '@instinct/files';
import { App } from './App';

createRoot(document.getElementById('root')!).render(<FileRouter><App /></FileRouter>);
