import { CHATS_ROUTE, SETTINGS_ROUTE, FRIENDS_ROUTE, POSTS_ROUTE, MY_PAGE_ROUTE } from '@shared/consts/routes'
import { HomeOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons'
import { SlidebarItemType } from '@shared/types/slidebarItemType'

export const useSlidebarItems = () => {
    
    const slidebarItemsList: SlidebarItemType[] = [
        {
            path: MY_PAGE_ROUTE,
            text: "My Page",
            icon: UserOutlined
        },
        {
            path: POSTS_ROUTE,
            text: "Posts",
            icon: HomeOutlined
        },
        {
            path: CHATS_ROUTE,
            text: "Messenger",
            icon: WechatOutlined
        },
        {
            path: FRIENDS_ROUTE,
            text: "Friends",
            icon: UsergroupAddOutlined
        },
        {
            path: SETTINGS_ROUTE,
            text: "Settings",
            icon: SettingOutlined
        },
    ]

    return slidebarItemsList
}
