'use client';
import { Provider } from 'react-redux';
import { Home } from '../templates/Home';
import store from '../redux/store';

export default function HomePage() {
  return (
    <div className="bg-gray-200 h-screen ">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
