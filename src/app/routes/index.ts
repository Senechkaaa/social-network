import { AUTH_ROUTE, CHATS_ROUTE, FRIENDS_ROUTE, POSTS_ROUTE, SETTINGS_ROUTE } from "@app/consts/link"
import { IRoutes } from "@app/interfaces/IRoutes"
import { AuthPage } from "@pages/auth/index"
import { PostsPage } from "@pages/posts/index"
import { SettingsPage } from "@pages/settings/index"
import { ChatsPage } from "@pages/chats/index"
import { FriendsPage } from "@pages/friends/index"

export const publicRoutes: IRoutes[] = [
    {
        path: AUTH_ROUTE,
        element: AuthPage
    },
]

export const privateRoutes: IRoutes[] = [
    {
        path: POSTS_ROUTE,
        element: PostsPage
    },
    {
        path: SETTINGS_ROUTE,
        element: SettingsPage
    },
    {
        path: CHATS_ROUTE,
        element: ChatsPage
    },
    {
        path: FRIENDS_ROUTE,
        element: FriendsPage
    },
]

// export default AuthPage