import {
    AUTH_ROUTE,
    CHATS_ROUTE,
    FRIENDS_ROUTE,
    HOME_ROUTE,
    MY_PAGE_ROUTE,
    POSTS_ROUTE,
    SETTINGS_ROUTE,
} from '@shared/consts/routes'
import { IRoutes } from '@app/interfaces/IRoutes'
import { AuthPage } from '@pages/auth/index'
import { PostsPage } from '@pages/posts/index'
import { SettingsPage } from '@pages/settings/index'
import { ChatsPage } from '@pages/chats/index'
import { FriendsPage } from '@pages/friends/index'
import { UserPage } from '@pages/user/index'
import { HomePage } from '@pages/home/index'

export const publicRoutes: IRoutes[] = [
    {
        path: AUTH_ROUTE,
        element: AuthPage,
    },
    {
        path: HOME_ROUTE,
        element: HomePage,
    },
]

export const privateRoutes: IRoutes[] = [
    {
        path: POSTS_ROUTE,
        element: PostsPage,
    },
    {
        path: SETTINGS_ROUTE,
        element: SettingsPage,
    },
    {
        path: CHATS_ROUTE,
        element: ChatsPage,
    },
    {
        path: FRIENDS_ROUTE,
        element: FriendsPage,
    },
    {
        path: MY_PAGE_ROUTE,
        element: UserPage,
    },
]

