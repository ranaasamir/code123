import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Profile from '@/components/Profile.vue'
import Activities from '@/components/Activities.vue'
import Courses from '@/components/Courses.vue'
import Articles from '@/components/Articles.vue'
import Article from '@/components/Article.vue'
import Session from '@/components/Session.vue'
import CreateSession from '@/components/CreateSession.vue'
import InvitePeople from '@/components/InvitePeople.vue'
import ContactUs from '@/components/ContactUs.vue'
import AboutUs from '@/components/AboutUs.vue'
import Login from '@/components/Login.vue'
import Forgot from '@/components/Forgot.vue'
import Reset from '@/components/Reset.vue'
import Doctor from '@/components/Doctor.vue'
import Psychologist from '@/components/Psychologist.vue'// importing the psychologists page to be able to view it
import confirmation from '@/components/confirmation.vue'
import Applications from '@/components/Applications.vue'
import ViewApplications from '@/components/ViewApplications.vue'
import AddActivity from '@/components/Activities/AddActivity.vue'
import ActivityAdded from '@/components/Activities/ActivityAdded.vue'
import RegisterMyChild from '@/components/Activities/RegisterMyChild.vue'
import Registered from '@/components/Activities/Registered.vue'
import AddReview from '@/components/Activities/AddReview.vue'
import ReviewAdded from '@/components/Activities/ReviewAdded.vue'
import editprofile from '@/components/editprofile.vue'
import Schedules from '@/components/Schedules.vue'
import TeacherSchedule from '@/components/TeacherSchedule.vue'
import editArticle from '@/components/editArticle'
import createArticle from '@/components/createArticle'
import RegisterChild from '@/components/RegisterChild.vue'
import upload from '@/components/upload.vue'
import admin from '@/components/Admin.vue'
import article1 from '@/components/article1.vue'
import comment1 from '@/components/comment1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/Session',
      name: 'Session',
      component: Session
    },
    {
      path: '/CreateSession',
      name: 'CreateSession',
      component: CreateSession
    },
    {
      path: '/InvitePeople',
      name: 'InvitePeople',
      component: InvitePeople
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/createArticle',
      name: 'createArticle',
      component: createArticle
    },
    {
      path: '/Article/:_id',
      name: 'Article',
      component: Article
    },
    {
      path: '/editArticle/:_id',
      name: 'editArticle',
      component: editArticle
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/Reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/Doctor',
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/Psychologist',
      name: 'Psychologist',
      component: Psychologist
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: confirmation
    },
    {
      path: '/Applications',
      name: 'Applications',
      component: Applications
    },
    {
      path: '/ViewApplications',
      name: 'ViewApplications',
      component: ViewApplications
    },
    {
      path: '/Activities/AddActivity',
      name: 'AddActivity',
      component: AddActivity
    },
    {
      path: '/Activities/ActivityAdded',
      name: 'ActivityAdded',
      component: ActivityAdded
    },
    {
      path: '/Activities/RegisterMyChild',
      name: 'RegisterMyChild',
      component: RegisterMyChild
    },
    {
      path: '/Activities/Registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/Activities/AddReview',
      name: 'AddReview',
      component: AddReview
    },
    {
      path: '/Activities/ReviewAdded',
      name: 'ReviewAdded',
      component: ReviewAdded
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: editprofile
    },
    {
      path: '/Schedules',
      name: 'Schedules',
      component: Schedules
    },
    {
      path: '/RegisterChild',
      name: 'RegisterChild',
      component: RegisterChild
    },
    {
      path: '/TeacherSchedule',
      name: 'TeacherSchedule',
      component: TeacherSchedule
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/article1',
      name: 'article1',
      component: article1
    },
    {
      path: '/comment1',
      name: 'comment1',
      component: comment1
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
