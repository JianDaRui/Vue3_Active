const Layout = () => import('components/Layout.vue')
const Hello = () => import('components/hello.vue')
// const VueJSX = () => import('@/pages/VueJSX/index.vue')
// const VueSetup = () => import('@/pages/VueSetup/index.vue')

const JSXTree = () => import('components/VueJSX/Tree/index.vue')
const JSXToDo = () => import('../components/VueJSX/ToDo/index.vue')
const JSXGrid = () => import('components/VueJSX/Grid/index.vue')

const SetupTree = () => import('components/VueSetup/SetupTree/index.vue')
const SetupToDo = () => import('components/VueSetup/SetupToDo/index.vue')
const SetupGrid = () => import('components/VueSetup/SetupGrid/index.vue')
const routes = [{
  path:'/',
  component: Layout,
  redirect: '/vue-jsx/tree',
  children: [
    {
      path: '/vue-jsx/tree',
      name: 'tree',
      component: JSXTree
    },
    {
      path: '/vue-jsx/grid',
      name: 'grid',
      component: JSXGrid
    },
    {
      path: '/vue-jsx/todo/:status',
      name: 'todo',
      component: JSXToDo,
    },
    {
      path: '/vue-setup/tree',
      name: 'setup-tree',
      component: SetupTree
    },
    {
      path: '/vue-setup/grid',
      name: 'setup-grid',
      component: SetupGrid
    },
    {
      path: '/vue-setup/todo/:status',
      name: 'setup-todo',
      component: SetupToDo,
    }
  ]
}]

export default routes