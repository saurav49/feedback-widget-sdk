import Widget from './components/widget';
import { createRoot } from 'react-dom/client';
import './index.css';

class WidgetComponent extends HTMLElement {
  private root: ReturnType<typeof createRoot> | null = null;
  constructor() {
    super();
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(<Widget />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

customElements.define('widget-component', WidgetComponent);
