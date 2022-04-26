const Layout = () => import('components/Layout.vue')
const Hello = () => import('components/hello.vue')

const VueJSX = () => import('@/pages/VueJsx.vue')
const VueSetup = () => import('@/pages/VueSetup.vue')

const JSXTree = () => import('components/VueJSX/Tree/index.vue')
const JSXToDo = () => import('components/VueJSX/ToDo/index.vue')
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
      path: 'vue-jsx',
      name: 'vue-jsx',
      redirect: '/vue-jsx/tree',
      component: VueJSX,
      children: [{
        path: 'tree',
        name: 'tree',
        component: JSXTree,
        meta: {
          title: 'Vue JSX Tree'
        }
      },
      {
        path: 'grid',
        name: 'grid',
        component: JSXGrid,
        meta: {
          title: 'Vue JSX Grid'
        }
      },
      {
        path: 'todo/:status',
        name: 'todo',
        component: JSXToDo,
        meta: {
          title: 'Vue JSX ToDo'
        }
      }]
    },{
      path: 'vue-setup',
      name: 'vue-setup',
      component: VueSetup,
      redirect: '/vue-setup/tree',
      children: [{
        path: 'tree',
        name: 'setup-tree',
        component: SetupTree,
        meta: {
          title: 'Vue Setup Tree'
        }
      },
      {
        path: 'grid',
        name: 'setup-grid',
        component: SetupGrid,
        meta: {
          title: 'Vue Setup Grid'
        }
      },
      {
        path: 'todo/:status',
        name: 'setup-todo',
        component: SetupToDo,
        meta: {
          title: 'Vue Setup Todo'
        }
      }]
    }
  ]
}]

export default routes