import Header from '../template/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

// Esperar a que algo suceda para ejecutar algo

const router = async () => {
    // Buscara ese id
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    // Mandamos el template de header a la vista HTML
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;