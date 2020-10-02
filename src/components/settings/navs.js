// import { BehaviorSubject } from 'rxjs';

// export const NAV = {
//   default: {
//     name: 'Side Menu Layout',
//   },
//   sideMenuLayout: {
//     name: 'Side Menu Layout',
//   },
//   TopMenuLayout: {
//     name: 'Top Menu Layout',
//   },
// };


// export const CURRENT_NAV = new BehaviorSubject(NAV.default);

// export function changeNav(name) {
//   localStorage.setItem('nav', name);
//   CURRENT_NAV.next(NAV[name]);
// }

// export function getCurrentNav(): NAV {
//   return CURRENT_NAV.getValue();
// }