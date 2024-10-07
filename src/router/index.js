import { createRouter, createWebHistory } from 'vue-router';
import CourseList from '../views/CourseList.vue';
import AddCourse from '../views/AddCourse.vue';
import EditCourse from '../views/EditCourse.vue';
import ViewCourse from '../views/ViewCourse.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CourseList',
      component: CourseList
    },
    {
      path: '/add-course',
      name: 'AddCourse',
      component: AddCourse
    },
    {
      path: '/edit-course/:id',
      name: 'edit',
      component: EditCourse
    },
    {
      path: '/view-course/:id',
      name: 'view',
      component: ViewCourse
    },
  ]
});

export default router;

