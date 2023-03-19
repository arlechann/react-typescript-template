import { app } from './app'

const root = document.getElementById('root');
if (root == null) { throw new Error('No root element.') }

app(root)